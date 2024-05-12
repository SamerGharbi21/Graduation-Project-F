import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ToastService } from './services/toast-service.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    .fixed {
      position: fixed;
    }
    .bottom-16 {
  bottom: 10rem; /* Adjust the distance from the bottom as needed */
}
    .right-4 {
      right: 7rem; /* Adjust the distance from the right as needed */
    }
  `]
})
export class AppComponent  {
supportDialogVisible: boolean = false;
  isLoginPage: boolean = true;
customerSupportForm: FormGroup = new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  issue: new FormControl('',Validators.required)
});

  constructor(private router: Router, private http: HttpClient,private toastService: ToastService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
      }
    });
  }
  reset(): void {
this.customerSupportForm.reset();
  }
  submit(): void {    
this.http.post('http://localhost:443/contact-us/email',this.customerSupportForm.value).subscribe({
  next: _ => {
    this.toastService.showSuccess({summary: 'Success', detail: 'Your request is received'});
    this.reset();
    this.supportDialogVisible = false;
    
  },
  error: err => {
    this.toastService.showError({summary: 'Error', detail: err});
  },
})
  }
}
