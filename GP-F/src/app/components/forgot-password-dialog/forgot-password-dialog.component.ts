import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-forgot-password-dialog',
  standalone: true,
  imports: [DynamicDialogModule],
  templateUrl: './forgot-password-dialog.component.html',
})
export class ForgotPasswordDialog {

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    console.log(this.forgotPasswordForm.value);
  }
}
