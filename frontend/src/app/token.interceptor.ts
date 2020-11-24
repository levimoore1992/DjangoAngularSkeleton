import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token');
    if (!token) {
      return next.handle(req);
    }

    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Token ${token}`),
    });
    return next.handle(modifiedReq);
  }
}
