import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  AdminPost(dto: FormData): Observable<any> {
    return this.http.post<any>('https://localhost:7217/api/Housing', dto);
  }
}
