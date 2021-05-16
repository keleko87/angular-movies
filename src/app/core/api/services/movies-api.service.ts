import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { Movie } from '../../models/movies.model';
import { Pagination } from 'src/app/containers/movies/store/movies.reducer';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  readonly API_MOVIE_PATH = '/api/movies';

  constructor(private http: HttpClient) {}

  /**
   * Get movies list
   * @returns Http
   */
  public getMovies(pag: Pagination): Observable<HttpResponse<{ total: number; body: any }>> {
    let params = new HttpParams();
    params = pag?.page ? params.set('_page', pag.page.toString()) : params;
    params = pag?.limit ? params.set('_limit', pag.limit.toString()) : params;

    return this.http
      .get<{ total: number; body: any }>(`${this.API_MOVIE_PATH}`, {
        params,
        observe: 'response',
      })
      .pipe(share());
  }

  /**
   * Create New movie
   *
   * @param body
   * @returns Movie object created
   */
  public createMovie(body: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.API_MOVIE_PATH}`, body);
  }

  /**
   * Update movie
   *
   * @param body
   * @returns Movie object updated
   */
  public updateMovie(body: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.API_MOVIE_PATH}/${body.id}`, body);
  }

  /**
   * Delete movie by {id}
   * @param id
   * @returns number: ID of movie deleted
   */
  public deleteMovie(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.API_MOVIE_PATH}/${id}`);
  }
}
