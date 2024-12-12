import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class ApiService {
  private API_ROOT_URL = 'https://mkixine-angular.g.kuroco.app';

  constructor(private http: HttpClient) {}

  async getRequest<T>(endpoint: string, params?: any): Promise<T> {
    const request = this.http.get<T>(this.API_ROOT_URL + endpoint, {
      headers: new HttpHeaders().set(
        'X-RCMS-API-ACCESS-TOKEN',
        '7f4adb1277630c7269bc32b092acc66bb943d571cb985709677c874d550a909b'
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
