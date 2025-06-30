import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePasswordDTO } from 'src/app/entities/ChangePasswordDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{
  form: FormGroup;
  changePasswordDto: ChangePasswordDTO = new ChangePasswordDTO();

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { 
    this.form = this.fb.group({
      matchPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      console.log(token)
      if (token) {
        this.changePasswordDto.token = token;
      } else {
        console.error('No token found in the URL');
      }
    });
  }

  get f() {
    return this.form.controls;
  }

  changePassword() {
    
      this.changePasswordDto.matchPassword = this.form.value.matchPassword;
      this.changePasswordDto.newPassword = this.form.value.newPassword;
      //this.changePasswordDto.token = this.form.value.t;
      this.userService.handleChangePassword(this.changePasswordDto).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.error(err);
        }
      });
    
  }

}
