import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {
  apiUrl='http://localhost:8000/api/v1';

  constructor( private http:HttpClient) { }

  register(f_name,l_name,email,password){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/register',
      { 
        f_name:f_name,
        l_name:l_name,
        email : email,
        password: password
      }, 
      {
        headers: { 'Content-Type': 'application/json' }
      }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  
  }
  
}
