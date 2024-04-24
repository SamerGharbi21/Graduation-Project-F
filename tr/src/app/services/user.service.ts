import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable, catchError, of, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private userURL: string = 'http://localhost:443/user/';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User | null> {
    return this.user.pipe(
      switchMap((user) => {
        if (user) {
          return of(user);
        } else {
          return this.http.get<User | null>(`${this.userURL}get`).pipe(
            tap(fetchedUser => {
              // if (fetchedUser && !fetchedUser.pfp) {
              //   fetchedUser.pfp = "./assets/defaultUserPfp.jpeg";
              // }
              this.user.next(fetchedUser);
            }),
            catchError(error => {
              console.error('Failed to fetch user:', error);
              return throwError(() => new Error('Failed to fetch user'));
            })
          );
        }
      })
    );
  }
}
