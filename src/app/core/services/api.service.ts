import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams(), responseType: any = 'json'): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, {
      params: params,
      responseType: responseType
    })
      .pipe(catchError(this.formatErrors));

  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}, options: {} = { responseType: 'json' }): Observable<any> {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv',
      'responseType': 'text' as 'json'
    };

    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {
        headers: headersConfig
      }
    )
  }

  delete(path: string, params: HttpParams = new HttpParams(), responseType: any = 'json'): Observable<any> {

    return this.http.delete(
      `${environment.api_url}${path}`, { params: params, responseType: responseType }
    ).pipe(catchError(this.formatErrors));
  }


  postFile(path: string, files: FormData) : Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, 
    files, 
    { headers: { } }
    );
  }
}
