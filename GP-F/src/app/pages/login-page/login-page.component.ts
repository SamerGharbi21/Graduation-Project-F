import { Component } from '@angular/core';
import { LoginForm } from './forms/login-form.component';
import { SignupForm } from './forms/signup-form.component';

{LoginForm}
@Component({
  selector: 'login-page',
  standalone: true,
  imports: [LoginForm,SignupForm],
  templateUrl: './login-page.component.html',
  styles: ''
})
export class LoginPage {

}
