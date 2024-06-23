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

  isNew: boolean = false;
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
    this.cofeeService.DeleteCofee(this.cofees.find(coffee => coffee.name === name)).subscribe({
      next: (res) => {
        console.log("Cofee Deleted ");
        this.getListOfCofees();
      },
      error: (err) => {
        console.log(err);
      }
    });
    
  }

  editCofee(name: string){
    console.log("Edit Cofee" + name);
    this.cofeeToEdit = this.cofees.find(coffee => coffee.name === name);
    this.showEdit = true;
  }

  AddNewCofee(){
    console.log("Add New Cofee");
    this.cofeeToEdit = {
      _id: this.cofees.length + 1,
      id: this.cofees.length + 1,
      name: '',
      description: '',
      region: '',
      price: 0,
      flavor_profile: [],
      grind_option: [],
      roast_level: 0,
      image_url: '',
      weight: 0,
    };
    this.isNew = true;
    this.showEdit = true;
  }

  OnEditCofee(updatedcofee: Cofee ){
    console.log("Save" + updatedcofee.price);
    this.cofeeService.UpdateCofee(updatedcofee).subscribe({
      next: (res) => {
        console.log("Cofee Updated");
        this.hideEditTable();
      },
      error: (err) => {
        console.log(err);
        this.hideEditTable();
      }
    });    
  }

  OnAddCofee(newcofee: Cofee){
    this.cofeeService.AddCofee(newcofee).subscribe({
      next: (res) => {
        console.log("Cofee Added");
        this.hideEditTable();
      },
      error: (err) => {
        console.log(err);
        this.hideEditTable();
      }
    });
  }

  hideEditTable() {
    this.showEdit = false;
    this.cofeeToEdit = null;
    this.isNew = false;
    console.log("Hide Edit Table");
  }

}
