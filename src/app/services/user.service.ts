import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageRequestUsersDTO } from '../entities/PageRequestUsersDTO';
import { Observable } from 'rxjs';
import { user } from '../entities/user';
import { ChangePasswordDTO } from '../entities/ChangePasswordDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  backendHost : string ="http://localhost:8085/auth/";

  public getUsersPage(page: number, size: number): Observable<PageRequestUsersDTO> {
    return this.http.get<PageRequestUsersDTO>(`${this.backendHost}${page}/${size}`);
  }
 
  public getUserById(id:any){
      return this.http.get<user>(this.backendHost + id)
  }
  
  handleResetPassword(email: string): Observable<any> {
    return this.http.post<string>(`${this.backendHost}reset-password`, { email });
  }
  
  handleChangePassword(changePasswordDTO: ChangePasswordDTO): Observable<string> {
    return this.http.post<string>(`${this.backendHost}change-password`, changePasswordDTO);
  }
  

}
