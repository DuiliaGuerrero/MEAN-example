import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:9000/api/goals';

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl, this.createHeaders());
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_goals')!
      })
    }
  }

  getGoalWithCreatedBy(goalId: string): Observable<any> {
    return this.httpClient.get(`/api/goals/${goalId}`);
  }

}
