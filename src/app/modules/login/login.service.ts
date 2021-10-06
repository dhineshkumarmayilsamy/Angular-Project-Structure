import { Injectable } from '@angular/core';
import { Login } from '@app/shared';
import { ApiService } from 'app/core';
import { of } from 'rxjs';


@Injectable()
export class LoginService {
  constructor(private apiservice: ApiService) { }

  login(login: Login) {
    //return this.apiservice.post("/login/login", login);
    return of(true);

  }
}