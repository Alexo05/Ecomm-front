import { Injectable } from '@angular/core';
import { LoginResponseDTO } from '../entities/LoginResponseDTO';
import { HttpHeaders } from '@angular/common/http';
export const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
const TOKEN_KEY = '5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437';
export const AUTH_API = 'http://localhost:8085/auth/login';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }
  
  signOut(): void { 
    window.sessionStorage.clear();
   }

   /** Save Token */
  public saveToken(token: LoginResponseDTO): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }
  /** GetToken */
  public getToken(): LoginResponseDTO | null {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    if (token) {
      return JSON.parse(token);
    } 
    return null;
  }

  
  /** Get La Valeur de Token  */
  public getTokenValue(): string | null {
    const token = this.getToken();
    if (token) {
      return token.accessToken;
    } 
    return null;
  }
  /** Get Les Roles à traver le Token  */
  public getRoles(): string[] | null {
    const token = this.getToken();
    if (token) { 
      return token.roles; 
    }
     return null;
  }
  /** Get email à traver le Token  */
  public getEmail(): string | null {
    const token = this.getToken(); 
    if (token) {
      return token.email;
    } 
    return null;
  }
  /** Does the token have the role ?  */
  public hasRole(role: string): boolean | null {
    const token = this.getToken();
    if (token) {
      return token.roles.includes(role);
    }
    return null;
  }
}
