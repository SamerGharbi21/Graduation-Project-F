import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastService } from './toast-service.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationURL: string = 'http://localhost:443/api/v1/auth/'; 
  constructor(private http: HttpClient, private toastService: ToastService, private router: Router) { 
  }

  login(credentials: { principle: string, password: string }): Observable<{accessToken: string, refreshToken: string}> {
    return this.http.post<{accessToken: string, refreshToken: string}>(`${this.authenticationURL}login`, credentials);
  }

  signup(credentials: {
    email: string;
    password: string;
    passwordConfirmation: string;
    username: string;
    firstName: string;
    lastName: string;
    // pfp: File | null;
  }): Observable<{accessToken: string, refreshToken: string}> {
    return this.http.post<{accessToken: string, refreshToken: string}>(`${this.authenticationURL}signup`, credentials);
  }
  

  resetPassword(email: string): Observable<Boolean> {
  return this.http.post<Boolean>(`${this.authenticationURL}reset-password`, email);
 }

 isEmailReserved(email: string): Observable<boolean> {
  return this.http.get<boolean>(`${this.authenticationURL}email/${email}`);
 }

 isUsernameReserved(username: string): Observable<boolean> {
  return this.http.get<boolean>(`${this.authenticationURL}username/${username}`);
 }

logout(): void{
  if(localStorage.getItem('refresh-token')||localStorage.getItem('access-token')){
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('refresh-token')}`
    });
    this.http.post(`${this.authenticationURL}logout`,{},{headers: header}).subscribe({
  next: _ => {
localStorage.removeItem('refresh-token');
localStorage.removeItem('access-token');
this.toastService.showSuccess({summary: 'Success', detail: 'Logged out successfully'});
this.router.navigateByUrl('login');
  },
  error: (err) => {
    console.log(err);
    
    this.toastService.showError({summary: 'Error', detail: err})
  },
});

}
}

}