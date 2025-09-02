import { Injectable } from '@angular/core';
import { JwtDecode } from '../Directives/HelperFunctions';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private refreshTimeout: any;

  constructor(private http: HttpClient) {}
  login(token: string, reToken: string) {
    localStorage.setItem('Token', token);
    localStorage.setItem('reToken', reToken);
    this.scheduleRefresh();
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('reToken');
    clearTimeout(this.refreshTimeout);
  }

  checklogin(): boolean {
    const token = localStorage.getItem('Token');
    if (!token) return false;

    try {
      const payload: any = JwtDecode(token);
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  getRole(): string {
    const token = localStorage.getItem('Token');
    if (!token) return '';
    const payload: any = JwtDecode(token);
    return payload.role || '';
  }
  refreshToken(): Observable<any> {
    const accessToken = localStorage.getItem('Token');
    const refreshToken = localStorage.getItem('reToken');
    if (!accessToken || !refreshToken) return of(null);

    return this.http
      .post<any>('https://localhost:7217/api/Auth/refresh-token', {
        accessToken,
        refreshToken,
      })
      .pipe(
        switchMap((tokens) => {
          if (tokens) {
            this.login(tokens.accessToken, tokens.refreshToken);
          }
          return of(tokens);
        })
      );
  }
  private scheduleRefresh() {
    const token = localStorage.getItem('Token');
    if (!token) return;

    const payload: any = JwtDecode(token);
    const expires = payload.exp * 1000;
    const now = Date.now();
    const refreshAt = expires - now - 2 * 60 * 1000;

    if (refreshAt <= 0) return;

    this.refreshTimeout = setTimeout(() => {
      this.refreshToken().subscribe({
        next: () => {},
        error(err) {
          console.log(err);
        },
      });
    }, refreshAt);
  }
}
