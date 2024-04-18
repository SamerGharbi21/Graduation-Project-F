import { Component } from '@angular/core';
import { LoginForm } from './forms/login-form.component';
import { SignupForm } from './forms/signup-form.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'login-page',
  standalone: true,
  imports: [LoginForm,SignupForm, SelectButtonModule, FormsModule],
  templateUrl: './login-page.component.html',
  // styles: ''
})
export class LoginPage {
choice: number|undefined;

choices = [
{label: 'Signup', value: 0},
{label: 'Login', value: 1}  
];

changeForm(index: number|undefined): void{
this.choice=index;
}

}
