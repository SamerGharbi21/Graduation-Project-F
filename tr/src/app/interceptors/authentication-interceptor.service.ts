import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
private authenticatedURL: string = 'api/v1/auth';
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!req.url.includes(this.authenticatedURL))
        if (typeof localStorage !== 'undefined') {
            const authToken = localStorage.getItem('access-token');
            if (authToken) {
                const authReq = req.clone({
                    headers: req.headers.set('Authorization', `Bearer ${authToken}`)
                });
                return next.handle(authReq);
            }
        }
        return next.handle(req);
    }
}
