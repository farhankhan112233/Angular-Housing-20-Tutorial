import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private url = '';
  constructor(private http: HttpClient) {}
  AdminPost(dto: any): Observable<any> {
    return this.http.post<any>(this.url, dto, {
      headers: { ContentType: 'Application/json' },
    });
  }
  uploadFiles(formData: FormData) {
    return this.http.post(this.url, formData);
  }
}
