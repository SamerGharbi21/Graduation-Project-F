import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'signup-form',
  standalone: true,
  imports: [InputGroupAddonModule,InputGroupModule,PasswordModule,ButtonModule,DropdownModule,ReactiveFormsModule,SelectButtonModule],
  templateUrl: './signup-form.component.html',
  // styles: ''
})
export class SignupForm {
  currentStep = 1;
   hosts=['hotmail.com,gmail.com'];
    signupForm = new FormGroup({
    username : new FormControl('',[Validators.minLength(4),Validators.required]),
    email : new FormControl('',[Validators.required,Validators.email]),
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    passwordConfirmation : new FormControl('',[Validators.required])
  });
  private static passwordMatchValidator(formGroup: FormGroup): { [key: string]: any } | null {
    const password = formGroup.get('password')!.value;
    const passwordConfirmation = formGroup.get('passwordConfirmation')!.value;
    return password === passwordConfirmation ? null : { passwordMismatch: true };
  }
  goToStep(step: number): void {
    this.currentStep = step;
  }
submit(): void {

}

}
