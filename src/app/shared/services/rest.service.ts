import { HttpOptions } from '../interfaces/http-options.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, options?: HttpOptions): Observable<T> {
    if (options) {
      return this.http.get<T>(`${environment.apiUrl}/${url}`, options);
    }
    return this.http.get<T>(`${environment.apiUrl}/${url}`);
  }

  put<T>(url: string, body: any, options?: HttpOptions): Observable<T> {
    if (options) {
      return this.http.put<T>(`${environment.apiUrl}/${url}`, body, options);
    }
    return this.http.put<T>(`${environment.apiUrl}/${url}`, body);
  }

  post<T>(url: string, body: any, options?: HttpOptions): Observable<T> {
    if (options) {
      return this.http.post<T>(`${environment.apiUrl}/${url}`, body, options);
    }
    return this.http.post<T>(`${environment.apiUrl}/${url}`, body);
  }

  patch<T>(url: string, body: any, options?: HttpOptions): Observable<T> {
    if (options) {
      return this.http.patch<T>(`${environment.apiUrl}/${url}`, body, options);
    }
    return this.http.patch<T>(`${environment.apiUrl}/${url}`, body);
  }

  delete<T>(url: string, options?: HttpOptions): Observable<T> {
    if (options) {
      return this.http.delete<T>(`${environment.apiUrl}/${url}`, options);
    }
    return this.http.delete<T>(`${environment.apiUrl}/${url}`);
  }
}
