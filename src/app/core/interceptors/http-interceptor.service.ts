import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';


@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var token: string = this.tokenService.getToken();

    let clone:any;
    if (token) {
      clone = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
    }else{
      clone = req.clone();
    } 

    return next.handle(clone);
  }
}
