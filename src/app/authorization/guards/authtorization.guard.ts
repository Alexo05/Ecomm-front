import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { TokenService } from 'src/app/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthtorizationGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthorizationService, private tokenService:TokenService) {
  }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.tokenService.getToken() != null && this.tokenService.getRoles()?.includes("ADMIN")) { 
        console.log("TEST");
        console.log("test Achraf ==> "+ this.tokenService.getRoles()?.includes("ADMIN"))
        console.log(this.tokenService.getToken());
          return true
      }
      console.log(this.tokenService.getToken());
      this.router.navigate(['index']);
      return false
  }
  
}
