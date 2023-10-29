import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private servicioLogin: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const tokenReq = req.clone({
      setHeaders:{
        Authorization:'' + this.servicioLogin.getToken()
      }
    });
    return next.handle(tokenReq);
  }
}