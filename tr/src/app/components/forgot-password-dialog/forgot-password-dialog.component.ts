import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../services/authentication.service';
import { ToastService } from '../toast-service.component';
@Component({
  selector: 'forgot-password-dialog',
  standalone: true,
  imports: [ButtonModule, DialogModule, InputGroupAddonModule, InputGroupModule, FloatLabelModule, InputTextModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forgot-password-dialog.component.html',
})
export class ForgotPasswordDialog {
  visible: boolean = false;
 @Input() email?: string;
constructor(private authenticationService: AuthService,private toastSerice: ToastService){
}

information: FormGroup = new FormGroup({email: new FormControl(this.email,[Validators.email,Validators.required])});
  showDialog() {
    this.information.get('email')?.setValue(this.email);
      this.visible = true;
  }

  closeDialog() {
      this.visible = false;
  }
submit(): void {
  if(!this.information.valid){
    this.toastSerice.showWarn({summary: 'Empty email', detail: 'Email cannot be empty'})
  }else
this.authenticationService.resetPassword(this.information.value.email!).subscribe({
  next: _ => {
    this.toastSerice.showSuccess({summary: 'Success', detail: 'A reset email has been sent'});
    this.closeDialog();
  },
  error: _ => {
    this.toastSerice.showError({summary: 'Error', detail: 'No account dound with this email'})
  },
});
}
}