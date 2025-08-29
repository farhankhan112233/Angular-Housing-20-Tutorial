import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import CryptoJS from 'crypto-js';
import { ILogin, ISignup } from '../../Interfaces/ILoginInterface';
import { AuthService } from '../../../Services/auth-service';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isLogin: boolean = true;
  LoginForm!: FormGroup;
  SignupForm!: FormGroup;
  route = inject(Router);
  constructor(private _service: AuthService) {}
  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  ngOnInit() {
    this.Loginvalues();
    this.SignupValues();
  }
  private Loginvalues() {
    this.LoginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  private SignupValues() {
    this.SignupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    if (this.isLogin) {
      if (!this.LoginForm.valid) {
        this.LoginForm.markAllAsTouched();
        return;
      }
      const pass = this.LoginForm.get('password')?.value;
      const hashed = CryptoJS.SHA256(pass).toString();

      const dto: ILogin = {
        username: this.LoginForm.get('username')?.value,
        password: hashed,
      };
      this._service.loginCheck(dto).subscribe({
        next: () => {
          this.route.navigate(['homes']);
        },
        error: (err) => {
          if (err.status == 400) {
            this.LoginForm.setErrors({ invalidLogin: true });
          }
        },
      });
    } else {
      if (!this.SignupForm.valid) {
        this.SignupForm.markAllAsTouched();
        return;
      }

      const pass = this.SignupForm.get('password')?.value;
      const hashed = CryptoJS.SHA256(pass).toString();

      const dto: ISignup = {
        name: this.SignupForm.get('name')?.value,
        email: this.SignupForm.get('email')?.value,
        password: hashed,
      };
      this._service.addUser(dto).subscribe({
        next: () => {
          this.isLogin = true;
        },
        error: (err) => {},
      });
    }
  }
}
