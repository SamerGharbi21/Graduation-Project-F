import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'signup-form',
  standalone: true,
  imports: [InputGroupAddonModule,InputGroupModule,PasswordModule,ButtonModule,DropdownModule,ReactiveFormsModule,SelectButtonModule, FormsModule, FloatLabelModule, InputTextModule],
  templateUrl: './signup-form.component.html',

})
export class SignupForm {
  currentStep : number = 1;
  @ViewChild('dropdown') dropdown!: Dropdown;
  hosts:string[] = [ 'hotmail.com', 'gmail.com' ];
  chosenHost: string = this.hosts[0];
    signupForm = new FormGroup({
    username : new FormControl('',[Validators.minLength(4),Validators.required]),
    email : new FormControl('',[Validators.required,Validators.maxLength(40),Validators.minLength(4)]),
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
//appending host to email
this.signupForm.controls['email'].setValue(`${this.signupForm.controls['email'].value}@${this.chosenHost}`);

}

}
