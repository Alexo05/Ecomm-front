import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API, httpOptions } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(private http: HttpClient) { } 
  private apiUrl = 'http://localhost:8085/auth/register'; 

  login(email : string,password: string): Observable<any> {
     return this.http.post(AUTH_API,{email,password,},httpOptions); 
    }
  
  register(firstname: string, lastname: string, numberPhone: string, email:string, password: string): Observable<any> {
    // const headers = new HttpHeaders({
    // 'Content-Type': 'application/json',
    // 'Accept': 'application/json'
    // });
    // const data = {firstname: firstname, lastname: lastname, email: email, numberPhone: numberPhone, password: password};
    // return this.http.post(this.apiUrl, data , { headers: headers });

     const url = 'http://localhost:8085/auth/register';

     const data1 = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      numberPhone: numberPhone.toString(),
      password: password
    };

    console.log(data1);
    const data = {
      firstname: firstname,
      lastname: 'Omadr',
      email: email,
      numberPhone: '0612345678',
      password: password
    };
    
    console.log(data);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(url, data, { headers });
  }
}
