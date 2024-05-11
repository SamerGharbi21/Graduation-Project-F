import { Injectable } from "@angular/core";
import { Subscription } from "../models/subscription.model";
import { BehaviorSubject, Observable, catchError, of, switchMap, tap, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SubscriptionType } from "../constants/subscription-type";
import { ToastService } from "./toast-service.component";
import { UserService } from "./user.service";



@Injectable({
    providedIn: 'root'
})

export class SubscriptionService {

subscriptions: BehaviorSubject<Subscription[] | null> = new BehaviorSubject<Subscription[] | null>(null);
private subscriptionURL: string = 'http://localhost:443/subscription/';
 
constructor(private http: HttpClient,private toastService: ToastService, private userService: UserService){}

getSubscriptions(): Observable<Subscription[]> {
    return this.subscriptions.pipe(
        switchMap((subsciptions) => {
          if (subsciptions) {        
            return of(subsciptions);
          } else {
            return this.http.get<Subscription[]>(`${this.subscriptionURL}get/all`).pipe(
              tap(fetchedSubscriptions => {            
                this.subscriptions.next(fetchedSubscriptions);
              }),
              catchError(error => {
                console.error('Failed to fetch subscriptions:', error);
                return throwError(() => new Error('Failed to fetch subscriptions'));
              })
            );
          }
        })
      );
}

subscribe(subscriptionType: SubscriptionType): Observable<Subscription | null> {
  return  this.http.post<Subscription | null>(`${this.subscriptionURL}subscribe`,subscriptionType.getName());
}


}