import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const BASE_PATH = 'https://jsonplaceholder.typicode.com';

export const HttpVerbs = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

@Injectable({
  providedIn: 'root',
})
export class ApiMockService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<unknown> {
    return this.http.get<HttpRequest<unknown>>(`${BASE_PATH}/posts`);
  }
}
