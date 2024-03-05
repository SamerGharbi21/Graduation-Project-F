import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
// import { FilledButton } from '../../components/filled-button/filled-button.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
@Component({
  selector: 'login-form',
  standalone: true,
  imports: [InputGroupAddonModule,InputGroupModule,PasswordModule,ButtonModule],
  templateUrl: './login-form.component.html',
  // styles: ''
})
export class LoginForm {

}
