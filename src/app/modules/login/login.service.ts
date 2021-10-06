import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Login } from 'src/app/shared/models/login.model';

@Injectable()
export class LoginService {
  constructor(private apiservice: ApiService) { }

  login(login: Login) {
    //return this.apiservice.post("/login/login", login);
    return of(true);

  }
}