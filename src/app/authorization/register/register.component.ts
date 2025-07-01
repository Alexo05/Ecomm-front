import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    userLoggedIn = '';
    form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  constructor(private authorizationService: AuthorizationService,
                private tokenStorage: TokenService, private router: Router) { }

  ngOnInit(): void { }
   
  get f() { 
    return this.form.controls; 
  }
   submit() {
    if (this.form.status === 'VALID') {
      this.authorizationService.register(  <string>this.form.controls['firstName'].value, <string>this.form.controls['lastName'].value, <string>this.form.controls['phoneNumber'].value, <string>this.form.controls['email'].value , <string>this.form.controls['password'].value )
            .subscribe({
              next: (data) => {
                this.tokenStorage.saveToken(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.userLoggedIn = <string>this.tokenStorage.getEmail();
                this.router.navigateByUrl('/login');
          },
          error: (err) => {
            this.errorMessage = err.error.message;
            console.log(this.errorMessage)
            this.isLoginFailed = true;
          },
          complete : ()=>console.log('Fin')
        });
      }    
    }
}
