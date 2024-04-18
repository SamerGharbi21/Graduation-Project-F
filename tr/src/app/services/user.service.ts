import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user!: User;

constructor(private httpClient: HttpClient) { }


getUser() : Observable<User>{
  return this.httpClient.get('').pipe();
}


}
