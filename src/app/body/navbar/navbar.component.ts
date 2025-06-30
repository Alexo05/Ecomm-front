import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public totalItem : number = 0;
  isAuthenticated! : boolean;

  constructor(
    private router:Router, private cartService:CartService,private tokenService:TokenService){}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res: string | any[])=>{
      this.totalItem = res.length;
    })
  }

  private showNavbar = true;

  setShowNavbar(value: boolean) {
       this.showNavbar = value;
   }
            
    getShowNavbar() {
       return this.showNavbar;
    }
  onLogOut(){
    this.tokenService.signOut();
    this.router.navigate(['index']);
  }

  isLoggedIn() {
    return this.tokenService.getToken() !== null;

  }

 
/** 
  constructor(private router: Router) { }

  logout() {
    // Supposons que le jeton d'authentification soit stocké dans le localStorage
    localStorage.removeItem('authToken');
    
    // Redirige vers la page de connexion
    this.router.navigate(['/login']);
  }
*/
}
