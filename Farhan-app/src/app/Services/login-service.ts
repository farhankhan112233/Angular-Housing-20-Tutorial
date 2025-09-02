import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, ISignup } from '../Interfaces/ILoginInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = inject(HttpClient);
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
