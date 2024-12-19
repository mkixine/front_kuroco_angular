import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

import { environment } from '@/environments/environment';

@Injectable({
  providedIn: 'any',
})
export class ApiService {
  private API_ROOT_URL = environment.API_ROOT_URL;
  private ACCESS_TOKEN = environment.STATIC_TOKEN;

  constructor(private http: HttpClient) {}

  async getRequest<T>(endpoint: string, params?: any): Promise<T> {
    const request = this.http.get<T>(
      new URL(endpoint, this.API_ROOT_URL).toString() + params
        ? '?' + new URLSearchParams(params).toString()
        : '',
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        withCredentials: true,
      }
    );
    return await firstValueFrom(request);
  }

  async postRequest<T, U>(endpoint: string, body: U, params?: any): Promise<T> {
    const request = this.http.post<T>(
      new URL(endpoint, this.API_ROOT_URL).toString() + params
        ? '?' + new URLSearchParams(params).toString()
        : '',
      body,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        withCredentials: true,
      }
    );
    return await firstValueFrom(request);
  }
}
