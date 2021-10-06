import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  private readonly TokenName = "tkn"
  saveToken(token: string) {
    window.localStorage[this.TokenName] = btoa(token);
  }

  getToken(): string {
    var enc = window.localStorage[this.TokenName]
    if(enc!=undefined){
      var tokn = atob(enc);
      return tokn;
    }      
    return "";
  }

  destroyToken() {
    window.localStorage.removeItem(this.TokenName);
  }
}
