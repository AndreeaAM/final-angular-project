import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Cofee } from '../helpers/models/cofee';
import { CofeeService } from '../helpers/cofee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  cofees: Cofee[] = [];
  cofeeToEdit: any = null;

  isLoading : boolean = true;
  showEdit: boolean = false;
  constructor(private cofeeService: CofeeService, private router: Router) {}

  ngOnInit(){
    this.getListOfCofees();
    };

  getListOfCofees(){
    console.log("Get List of Cofees");
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
  deleteCofee(name: string){
    console.log("Delete Cofee " + name);
    
  }

  editCofee(name: string){
    console.log("Edit Cofee" + name);
    this.cofeeToEdit = this.cofees.find(coffee => coffee.name === name);
    this.showEdit = true;
  }

  hideEditTable() {
    this.showEdit = false;
    this.cofeeToEdit = null;
    console.log("Hide Edit Table");
  }

}
