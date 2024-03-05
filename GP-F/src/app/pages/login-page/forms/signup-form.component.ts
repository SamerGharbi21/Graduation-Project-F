import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'signup-form',
  standalone: true,
  imports: [InputGroupAddonModule,InputGroupModule,PasswordModule,ButtonModule,DropdownModule],
  templateUrl: './signup-form.component.html',
  // styles: ''
})
export class SignupForm {
  currentStep = 1;
  hosts=['hotmail.com,gmail.com'];
  goToStep(step: number): void {
    this.currentStep = step;
  }
submit(): void {

}

}
