import { Component } from '@angular/core';
import { FilledButton } from '../../components/filled-button/filled-button.component';
import { LoginForm } from './forms/login-form.component';
import { SignupForm } from './forms/signup-form.component';

{LoginForm}
@Component({
  selector: 'login-page',
  standalone: true,
  imports: [FilledButton,LoginForm,SignupForm],
  templateUrl: './login-page.component.html',
  styles: ''
})
export class LoginPage {

}
