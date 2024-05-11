import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, switchMap, tap, throwError } from 'rxjs';
import { Inference } from '../models/inference.model';

@Injectable({
  providedIn: 'root'
})
export class InferenceService {
private inferenceURL: string = 'http://localhost:443/inference/';
constructor(private http: HttpClient) { }
inferences: BehaviorSubject<Inference[] | null> = new BehaviorSubject<Inference[] | null>(null);

infereAi(inferenceRequest: {query: string, whenCreated: Date}): Observable<{id: number, response: string}> {  
return this.http.post<{id: number,response: string}>(`${this.inferenceURL}infere`,inferenceRequest);
}

deleteInference(id: number): Observable<any> {
  return this.http.delete<any>(`${this.inferenceURL}remove/${id}`, { observe: 'response' });
}



getInferences(): Observable<Inference[] | null>{
  return this.inferences.pipe(
    switchMap((inferences) => {
      if (inferences) {        
        return of(inferences);
      } else {
        return this.http.get<Inference[]>(`${this.inferenceURL}get/all`).pipe(
          tap(fetchedInferences => {            
            this.inferences.next(fetchedInferences);
          }),
          catchError(error => {
            console.error('Failed to fetch inferences:', error);
            return throwError(() => new Error('Failed to fetch inferences'));
          })
        );
      }
    })
  );
}

updateInferences(updatedInferences: Inference[]): void {
this.inferences.next(updatedInferences);  
}
removeFromInference(id: number): void {
  this.updateInferences(this.inferences.value!.filter(inference => inference.id !== id));
}


}
