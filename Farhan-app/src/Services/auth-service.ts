import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin, ISignup } from '../app/Interfaces/ILoginInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = '';
  constructor(private http: HttpClient) {}
  loginCheck(dto: ILogin): Observable<any> {
    return this.http.post<any>(this.url, dto);
  }
  addUser(dto: ISignup): Observable<ISignup> {
    return this.http.post<ISignup>(this.url, dto);
  }
}
