import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const BASE_PATH = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class ApiMockService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<unknown> {
    return this.http.get<HttpRequest<unknown>>(`${BASE_PATH}/posts`);
  }
}
