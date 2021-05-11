import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { Movie } from '../../models/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  readonly API_MOVIE_PATH = '/api/movies';

  constructor(private http: HttpClient) {}

  /**
   * Get movies list
   * @returns Movie[]
   */
  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.API_MOVIE_PATH}`).pipe(share());
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
    return this.http.put<Movie>(`${this.API_MOVIE_PATH}`, body);
  }

  /**
   * Delete movie by {id}
   * @param id
   * @returns number: ID of movie deleted
   */
  public deleteMovie(id: number): Observable<string> {
    return this.http.delete<string>(`${this.API_MOVIE_PATH}/${id}`);
  }
}
