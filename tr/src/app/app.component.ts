import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';



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

  constructor(private router: Router) {
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

  }
}
