import { Injectable } from '@angular/core';
import { ApiService } from '@app/core';
import { Constants } from '@app/shared';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class HomeService {

  constructor(private apiservice: ApiService) { }
  currentDiv: string = Constants.Menu1;
  private navigatedSubject = new BehaviorSubject<string>(this.currentDiv);
  public navigationObservable = this.navigatedSubject.asObservable();

  // Available for use inside Lambda 
  public lambdaSnippetId: number = 0;

  navigate(menu: string) {
    this.currentDiv = menu;
    this.navigatedSubject.next(this.currentDiv);
  }
}