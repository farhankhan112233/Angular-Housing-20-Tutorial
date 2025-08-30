import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin, ISignup } from '../Interfaces/ILoginInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  loginCheck(dto: ILogin): Observable<any> {
    return this.http.post<any>('https://localhost:7217/api/Auth/login', dto);
  }
  addUser(dto: ISignup): Observable<ISignup> {
    return this.http.post<ISignup>(
      'https://localhost:7217/api/Auth/signup',
      dto
    );
  }
}
