import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrimeTemplate } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'forgot-password-dialog',
  standalone: true,
  imports: [ButtonModule, DialogModule, InputGroupAddonModule, InputGroupModule, FloatLabelModule, InputTextModule],
  templateUrl: './forgot-password-dialog.component.html',
})
export class ForgotPasswordDialog implements OnInit{
  
  visible: boolean = false;
 @Input() email?: string;

  ngOnInit(): void {
  this.email = '';
  }
information = new FormGroup({email: new FormControl(this.email,[Validators.email,Validators.required])});
  showDialog() {
      this.visible = true;
  }

  closeDialog() {
      this.visible = false;
  }
submit(): void {

}

}