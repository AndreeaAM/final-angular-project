import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CofeeService {
  

  constructor(private httpClient:HttpClient) {}

  getListOfCofees():Observable<any>{
    return this.httpClient.get('https://fake-coffee-api.vercel.app/api')
    
    ;
  }

  UpdateCofee(cofee:any):Observable<any>{
    return this.httpClient.put(`https://fake-coffee-api.vercel.app/docs/${cofee.id}`,cofee)
  }

  DeleteCofee(cofee:any):Observable<any>{
    return this.httpClient.delete(`https://fake-coffee-api.vercel.app/docs/${cofee.id}`)
  }

  AddCofee(cofee:any):Observable<any>{
    return this.httpClient.post(`https://fake-coffee-api.vercel.app/docs`,cofee)
  } 
}
