import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Cofee } from '../helpers/models/cofee';


@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent {
  @Input() cofee: Cofee = {
    _id: '',
    id: 0,
    name: 'asdas',
    description: '',
    region: '',
    price: 0,
    flavor_profile: [],
    grind_option: [],
    roast_level: 0,
    image_url: '',
    weight: 0,
  };
  @Output() close = new EventEmitter();

  cancel(){
    console.log("Cancel");
    this.close.emit();
  }

  save(){
    console.log("Save");
    this.close.emit();
  }
  
  }


