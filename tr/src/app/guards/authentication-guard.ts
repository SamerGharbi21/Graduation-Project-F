import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode'; // Correct import statement

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (typeof localStorage !== 'undefined') {
      const accessToken = localStorage.getItem('access-token');

      if (accessToken) {
        const decodedToken: any = jwtDecode(accessToken); // Decode the token
        const expirationTime = decodedToken.exp * 1000; // Convert expiration time to milliseconds

        if (expirationTime > Date.now()) { // Check if token is still valid
          return true;
        }
      }
    }

    // If no token or token expired, navigate to login page
    this.router.navigateByUrl('/login');
    return false;
  }
}
