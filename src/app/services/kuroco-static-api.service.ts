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
    const request = this.http.get<T>(this.API_ROOT_URL + endpoint, {
      headers: new HttpHeaders().set(
        'X-RCMS-API-ACCESS-TOKEN',
        this.ACCESS_TOKEN
      ),
    });
    return await firstValueFrom(request);
  }

  async getHtml(slug: string): Promise<string> {
    return this.getRequest<{ details: { html: string } }>(
      '/rcms-api/3/html/' + slug
    ).then((response) => response.details.html);
  }
}
