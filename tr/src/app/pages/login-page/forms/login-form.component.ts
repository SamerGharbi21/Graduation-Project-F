import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'login-form',
  standalone: true,
  imports: [InputGroupAddonModule,InputGroupModule,PasswordModule,ButtonModule,ReactiveFormsModule,FloatLabelModule,InputTextModule],
  templateUrl: './login-form.component.html',
  // styles: ''
})
export class LoginForm {
loginForm = new FormGroup({
  principal : new FormControl(''),
  password : new FormControl('')
});

submit() : void{

} 
  
}
