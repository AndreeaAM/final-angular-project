import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Cofee } from '../helpers/models/cofee';
import { CofeeService } from '../helpers/cofee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  cofees: Cofee[] = [];

  isLoading : boolean = true;
  constructor(private cofeeService: CofeeService) {}

  ngOnInit(){
    this.getListOfCofees();
    };

  getListOfCofees(){
    this.cofeeService.getListOfCofees().subscribe({
      next: (res) => {
        this.cofees = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    }); 
  }

}
