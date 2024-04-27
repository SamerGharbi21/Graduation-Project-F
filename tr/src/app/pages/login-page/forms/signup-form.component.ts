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
import { AuthService } from '../../../services/authentication.service';
import { ToastService } from '../../../services/toast-service.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../validators/password-confirmation.validator';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'signup-form',
  standalone: true,
  imports: [InputGroupAddonModule,InputGroupModule,PasswordModule,ButtonModule,DropdownModule,ReactiveFormsModule,SelectButtonModule, FormsModule, FloatLabelModule, InputTextModule, FileUploadModule, CommonModule, StepsModule],
  templateUrl: './signup-form.component.html',

})
export class SignupForm {

constructor(private authenticationService: AuthService, private toastService: ToastService, private router: Router){}

  currentStep : number = 1;
  @ViewChild('dropdown') dropdown!: Dropdown;
  hosts:string[] = [ 'hotmail.com', 'gmail.com' ];

  steps: MenuItem[] = [{label: 'Username',},{label: 'Email'},{label: 'Personal'}];
  chosenHost: string = this.hosts[0];
    signupForm: FormGroup = new FormGroup({
    username : new FormControl('',[Validators.minLength(4),Validators.required]),
    email : new FormControl('',[Validators.required,Validators.maxLength(40),Validators.minLength(4)]),
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    passwordConfirmation : new FormControl('',[Validators.required]),
    // pfp: new FormControl(File)
  }, {validators: passwordMatchValidator});

  
  goToStep(step: number): void {
    this.currentStep = step;
  }
  submit(): void {    
    if (this.signupForm.valid) {
      const formValue = {
        username: this.signupForm.get('username')!.value as string,
        email: (this.signupForm.get('email')!.value as string) + '@' + this.chosenHost,
        firstName: this.signupForm.get('firstName')!.value as string,
        lastName: this.signupForm.get('lastName')!.value as string,
        password: this.signupForm.get('password')!.value as string,
        passwordConfirmation: this.signupForm.get('passwordConfirmation')!.value as string,
        // pfp: this.signupForm.get('pfp')!.value as unknown as File
      };
      
      this.authenticationService.signup(formValue).subscribe({
        next: (response) => {
          this.toastService.showSuccess({summary: 'Welcome', detail: 'You have created an account'});
          this.saveTokens(response.accessToken,response.refreshToken);
          this.router.navigateByUrl('/ai');
        },
        error: _ => {
          this.toastService.showError({summary: 'Error', detail: 'An error occured. try again'});
        }
      });
    }
  }
  private saveTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('access-token', accessToken); 
    localStorage.setItem('refresh-token', refreshToken); 
  }
checkUsername(): void {
this.authenticationService.isUsernameReserved(this.signupForm.get('username')?.value).subscribe({
  next: value => {
    if(value)
      this.toastService.showError({summary: 'Error', detail: 'Username is reserved'})
    else
    this.goToStep(2);
  },
  error: _ => {
    this.toastService.showError({summary: 'Error', detail: 'Try again'});
  },
});
}
checkEmail(): void {
  this.authenticationService.isEmailReserved(this.signupForm.get('email')?.value+'@'+this.chosenHost).subscribe({
    next: value => {
      if(value)
        this.toastService.showError({summary: 'Error', detail: 'Email is Reserved'});
        else
      this.goToStep(3);
    },
    error: _  =>{
      this.toastService.showError({summary: 'Error', detail: 'Try again'});
    },
  });
}
}
