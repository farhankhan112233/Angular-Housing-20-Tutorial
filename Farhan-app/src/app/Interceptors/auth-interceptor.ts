import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('Token');
    if (token) {
      const modifiedreq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(modifiedreq);
    }
    return next.handle(req);
  }
}
