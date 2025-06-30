import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent  implements OnInit{

  form: FormGroup;
  newUserFormGroupe: any;
  emailentitiy! : string;

  constructor(private router: Router, private userService: UserService, private fb :FormBuilder) { 
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void { 
    this.newUserFormGroupe=this.fb.group({
      email : this.fb.control('', [Validators.required, Validators.email])
    })
  }

  get f() { 
    return this.form.controls; 
  }

  resetPassword() {
    this.emailentitiy = this.newUserFormGroupe.value.username;
    if (this.form.valid) {
      this.userService.handleResetPassword(<string>this.form.controls['email'].value)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }

}
