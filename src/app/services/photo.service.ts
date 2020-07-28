import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(
    private _http: HttpClient
  ) {
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    console.log('---start service get with path: ', path);
    return this._http.get(`${environment.API_URL}${path}`, {params}).pipe(
      retry(2),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  post(path: string, body: Object = {}): Observable<any> {
    console.log('---start service post with path: ', path);
    return this._http.post(`${environment.API_URL}${path}`, body).pipe(
      retry(2),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  put(path: string, body: Object = {}): Observable<any> {
    console.log('---start service put with path: ', path);
    return this._http.put(`${environment.API_URL}${path}`, body).pipe(
      retry(2),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  delete(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    console.log('---start service delete with path: ', path);
    return this._http.delete(`${environment.API_URL}${path}`, {params}).pipe(
      retry(2),
      catchError(err => {
        return throwError(err);
      })
    );
  }


}
