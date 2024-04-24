import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inference } from '../models/inference.model';

@Injectable({
  providedIn: 'root'
})
export class InferenceService {
private inferenceURL: string = 'http://localhost:443/inference/';
constructor(private http: HttpClient) { }

infereAi(query: string): Observable<{id: number, response: string}> {
return this.http.post<{id: number,response: string}>(`${this.inferenceURL}infere`, query);
}

deleteInference(id: number): Observable<Boolean> {
return this.http.delete<Boolean>(`${this.inferenceURL}${id}`);
}

getInferences(): Observable<Inference[]>{
  return this.http.get<Inference[]>(`${this.inferenceURL}get/all`);
}



}
