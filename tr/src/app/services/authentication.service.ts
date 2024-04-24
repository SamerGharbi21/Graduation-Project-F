import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationURL: string = 'http://localhost:443/api/v1/auth/'; 
  constructor(private http: HttpClient) { }

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
    // pfp?: File;
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
this.http.post(`${this.authenticationURL}logout`,{});
localStorage.removeItem('refresh-token');
localStorage.removeItem('access-token');
}
}

}