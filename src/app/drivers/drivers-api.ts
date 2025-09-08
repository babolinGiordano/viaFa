import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from './driver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriversApi {
  private http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:3000'; // usa env se preferisci

  fetchAll(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.baseUrl}/drivers`);
  }
}
