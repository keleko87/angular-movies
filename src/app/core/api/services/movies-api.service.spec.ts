import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { MoviesApiService } from './movies-api.service';
import { movieList } from 'tests/fixtures/movies-fixture';
import { HttpVerbs } from 'tests/mocks/api-mock.service';
import { Movie } from '../../models/movies.model';
import { PaginationMock } from 'tests/mocks/pagination-mock';

describe('MoviesApiService', () => {
  let injector: TestBed;
  let service: MoviesApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesApiService],
    });

    injector = getTestBed();
    service = injector.inject(MoviesApiService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<Movie[]> when call #getMovies', () => {
    service.getMovies(PaginationMock).subscribe((res) => {
      expect(res.headers).toBeDefined();
      expect(res.body).toBeDefined();
    });

    const req = httpMock.expectOne(
      `${service.API_MOVIE_PATH}?_page=${PaginationMock.page}&_limit=${PaginationMock.limit}`
    );
    expect(req.request.method).toBe(HttpVerbs.GET);
    req.flush(movieList);
  });

  it('should receive a <Movie> as a req body and return an Observable<Movie> when call #createMovie', () => {
    service.createMovie(movieList[0]).subscribe((movie: Movie) => {
      expect(movie).toEqual(movieList[0]);
    });

    const req = httpMock.expectOne(`${service.API_MOVIE_PATH}`);
    expect(req.request.method).toBe(HttpVerbs.POST);
    req.flush(movieList[0]);
  });

  it('should receive a type <Movie> as a req body and return an Observable<Movie> when call #updateMovie', () => {
    service.updateMovie(movieList[0]).subscribe((movies: Movie) => {
      expect(movies).toEqual(movieList[0]);
    });

    const req = httpMock.expectOne(`${service.API_MOVIE_PATH}/${movieList[0].id}`);
    expect(req.request.method).toBe(HttpVerbs.PUT);
    req.flush(movieList[0]);
  });

  it('should receive a "id" movie as a param and return an Observable<{}> when call #deleteMovie', () => {
    service.deleteMovie(movieList[0].id).subscribe((res) => {
      expect(res).toEqual(movieList[0].id);
    });

    const req = httpMock.expectOne(`${service.API_MOVIE_PATH}/${movieList[0].id}`);
    expect(req.request.method).toBe(HttpVerbs.DELETE);
    req.flush(movieList[0].id);
  });
});
