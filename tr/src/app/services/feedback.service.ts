import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, switchMap, tap, throwError } from 'rxjs';
import { Feedback } from '../models/feedback.model';
import { FeedbackType } from '../constants/feedback-type';
@Injectable({
providedIn: 'root'
})
export class FeedbackService {
feedbacks: BehaviorSubject<Feedback[] | null> = new BehaviorSubject<Feedback[] | null>(null);
private feedbackURL: string = 'http://localhost:443/feedback/';
constructor(private http: HttpClient){}

getFeedbacks(): Observable<Feedback[]> {
    return this.feedbacks.pipe(
        switchMap((feedbacks) => {
          if (feedbacks) {        
            return of(feedbacks);
          } else {
            return this.http.get<Feedback[]>(`${this.feedbackURL}get/all`).pipe(
              tap(fetchedInferences => {            
                this.feedbacks.next(fetchedInferences);
              }),
              catchError(error => {
                console.error('Failed to fetch feedbacks :', error);
                return throwError(() => new Error('Failed to fetch feedbacks'));
              })
            );
          }
        })
      );}

sendFeedback(feedback: {complaint: string, type: FeedbackType ,whenMade :Date }) : Observable<number> {
return this.http.post<number>(`${this.feedbackURL}send`,feedback);
}

deleteFeedback(id: number): Observable<any> {
return this.http.delete<any>(`${this.feedbackURL}remove/${id}`);

}

}