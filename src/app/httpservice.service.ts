import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  [x: string]: any;

  baseurl:string='http://localhost:8080/api/'
  constructor(private http:HttpClient) { }

  getAllRecords(){
    return(this.http.get(`${this.baseurl}getallemp`))
  }

  getParticularDataById(id:any){
    return (this.http.get(`${this.baseurl}getbyId/${id}`))
  }

  getAllCountry(){
    return (this.http.get(`${this.baseurl}getAllCountry`))
  }

  PostEmpData(obj:any){
    return (this.http.post(`${this.baseurl}addemp`,obj,{
       responseType:'text'
     }));
 }

 updateData(obj:any){
    return (this.http.put(`${this.baseurl}updateemp`,obj,{responseType:'text'}))
 }

 deleteData(id:any){
     return (this.http.delete(`${this.baseurl}deleteemp/${id}`,{responseType:'text'}))
 }

}
