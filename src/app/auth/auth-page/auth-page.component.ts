import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../_helpers/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  userToken: string | null = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.userToken = sessionStorage.getItem('userToken');
  }

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.notificationService.error('Error', 'Please enter email and password');
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response);
        if (response.token) {
          this.authService.setToken(response.token);
          this.userToken = this.authService.getToken();
          sessionStorage.setItem('userToken', response.token);
          this.router.navigateByUrl('/table');
        } else {
          this.notificationService.error('Error', 'Invalid credentials');
        }
      },
      (error: any) => {
        console.error(error);
        this.notificationService.error('Error', 'Something went wrong');
      }
    );
  }

  onRememberMeRequest(): void {
    if (!this.email || !this.password) {
      this.notificationService.error('Error', 'Please enter email and password');
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response);
        if (response.token) {
          this.authService.setToken(response.token);
          this.userToken = this.authService.getToken();

          if (this.rememberMe) {
            localStorage.setItem('userToken', response.token);
          } else {
            sessionStorage.setItem('userToken', response.token);
          }

          this.router.navigateByUrl('/dashboard');
        } else {
          this.notificationService.error('Error', 'Invalid credentials');
        }
      },
      (error: any) => {
        console.error(error);
        this.notificationService.error('Error', 'Something went wrong');
      }
    );
  }
}
