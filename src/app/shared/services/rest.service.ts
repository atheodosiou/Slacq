import { HttpClient, Http } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { } from 'rxjs/Observable';
import { Router } from '@angular/router'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { HttpOptions } from '../interfaces/http-options.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, options?: HttpOptions): Observable<T> {
    if (options) {
      return this.http.get<T>(url, options);
    }
    return this.http.get<T>(url);
  }

  put<T>(url: string, body: any, options?: HttpOptions): Observable<T> {
    if (options) {
      return this.http.put<T>(url, body, options);
    }
    return this.http.put<T>(url, body);
  }

  post<T>(url: string, body: any, options?: HttpOptions): Observable<T> {
    if (options) {
      return this.http.post<T>(url, body, options);
    }
    return this.http.post<T>(url, body);
  }

  patch<T>(url: string, body: any, options?: HttpOptions): Observable<T> {
    if (options) {
      return this.http.patch<T>(url, body, options);
    }
    return this.http.patch<T>(url, body);
  }

  delete<T>(url: string, options?: HttpOptions): Observable<T> {
    if (options) {
      return this.http.delete<T>(url, options);
    }
    return this.http.delete<T>(url);
  }
}
