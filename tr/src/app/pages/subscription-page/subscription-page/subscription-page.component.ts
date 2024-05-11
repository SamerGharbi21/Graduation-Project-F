import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from '../../../models/subscription.model';
import { SubscriptionService } from '../../../services/subscription.service';
import { UserService } from '../../../services/user.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SubscriptionType } from '../../../constants/subscription-type';
import { ToastService } from '../../../services/toast-service.component';
interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-subscription-page',
  standalone: true,
  imports: [TableModule, CommonModule, CardModule, ButtonModule],
  templateUrl: './subscription-page.component.html',
  // styleUrl: './subscription-page.component.css'
})
export class SubscriptionPage implements OnInit{
premium: boolean = false;
premiumDate: Date | null = null;
Subscriptions: Observable<Subscription[]>;
columns!: Column[];
subscrptionPlans: SubscriptionType[] = [SubscriptionType.Monthly,SubscriptionType.Semiannual,SubscriptionType.Annually];

constructor(private subscriptionService : SubscriptionService, private userService: UserService, private toastService: ToastService){
  this.Subscriptions = this.subscriptionService.getSubscriptions();
 this.userService.getUser().subscribe({
    next: value => {
      if(value!.premium){
     this.premium = new Date(value!.premium!).getTime()>new Date().getTime();
      if(this.premium)
        this.premiumDate = value!.premium;
      }
    },
    error: err => {
      this.toastService.showError({summary: 'Error', detail:err})
    },
  });
}
ngOnInit(): void {  
    this.columns = [
      { field: 'id', header: 'ID' },
      { field: 'price', header: 'Price' },
      { field: 'type', header: 'Type' },
      { field: 'whenMade', header: 'When Made' }
    ];  }
 

subscribe(subscriptionType: SubscriptionType): void {
   this.subscriptionService.subscribe(subscriptionType).subscribe({
    next : value => {
      if(value){
      this.subscriptionService.subscriptions.value?.push(value);
      this.userService.user.value!.premium = new Date(Date.now() + subscriptionType.getPeriod());
      this.toastService.showSuccess({summary: 'Successfully subscribed', detail: 'Welcome to Premium'});
      this.premiumDate = this.userService.user.value?.premium!;
      this.premium = true;

    }
      else
      this.toastService.showError({summary: 'Error', detail: 'Already subscribed'});
    },
    error: err => {
      this.toastService.showError({summary: 'Error', detail: err});
    },
  });
}
}
