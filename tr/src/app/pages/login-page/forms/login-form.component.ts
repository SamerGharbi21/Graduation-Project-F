import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../services/authentication.service';
import { ToastService } from '../../../services/toast-service.component';
import { Router } from '@angular/router';
import { ForgotPasswordDialog } from '../../../components/forgot-password-dialog/forgot-password-dialog.component';


@Component({
  selector: 'login-form',
  standalone: true,
  imports: [InputGroupAddonModule,InputGroupModule,PasswordModule,ButtonModule,ReactiveFormsModule,FloatLabelModule,InputTextModule, ForgotPasswordDialog],
  templateUrl: './login-form.component.html',
  // styles: ''
})
export class LoginForm {

loginForm: FormGroup = new FormGroup({
  principle : new FormControl('',Validators.required),
  password : new FormControl('',Validators.required)
});
constructor(private authService: AuthService, private toastService: ToastService, private router: Router) {
}
private saveTokens(accessToken: string, refreshToken: string): void {
  localStorage.setItem('access-token', accessToken); 
  localStorage.setItem('refresh-token', refreshToken); 
}
submit(): void {
  if (this.loginForm.valid) {
    this.authService.login({
      password: this.loginForm.value.password!,
      principle: this.loginForm.value.principle!
    }).subscribe({
      next: (response) => {
        this.toastService.showSuccess({summary: 'Success', detail: 'Successfully logged in'});
        this.saveTokens(response.accessToken,response.refreshToken);
        this.router.navigateByUrl('/ai')
      },
      error: () => {
        this.toastService.showError({summary: 'Failed', detail: 'Inccorect Email or Password'});
      }
    });
  }
}

}
