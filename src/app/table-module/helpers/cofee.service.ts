import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, filter, map } from 'rxjs';
import { Cofee } from './models/cofee';

@Injectable({
  providedIn: 'root'
})
export class CofeeService {
  

  constructor(private httpClient:HttpClient) {}

  getListOfCofees():Observable<any>{
    return this.httpClient.get('https://fake-coffee-api.vercel.app/api');
  }

  UpdateCofee(cofee:any):Observable<any>{
    console.log("Update Cofee "+ cofee.id);
   
    return this.httpClient.put(`https://fake-coffee-api.vercel.app/api/${cofee.id}`,JSON.stringify(cofee))
  }

  DeleteCofee(cofee:any):Observable<any>{
    console.log("Delete Cofee "+ cofee.id);
    
    return this.httpClient.delete(`https://fake-coffee-api.vercel.app/api/${cofee.id}`)
  }

  AddCofee(cofee:any):Observable<any>{
    return this.httpClient.post(`https://fake-coffee-api.vercel.app/docs`,cofee)
  } 
}
