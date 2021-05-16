import { Observable, of } from 'rxjs';
import { getTestBed, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MoviesEffects } from './movies.effects';
import { MoviesApiService } from 'src/app/core/api/services/movies-api.service';
import { ActionTypes } from './movies.actions';
import { movieList } from 'tests/fixtures/movies-fixture';

describe('Store > Data > MoviesEffects', () => {
  let injector: TestBed;
  let actions$: Observable<any>;
  let effects: MoviesEffects;
  let dataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        MoviesEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: MoviesApiService,
          useValue: jasmine.createSpyObj('DataService', [
            'getMovies',
            'createMovie',
            'updateMovie',
            'deleteMovie',
          ]),
        },
      ],
    });

    injector = getTestBed();
    effects = injector.inject(MoviesEffects);
    dataService = injector.inject(MoviesApiService);
  });

  it('should dispatch "setMovies" action when "requestMovies" action is dispatched', () => {
    dataService.getMovies.and.returnValue(of(movieList));
    actions$ = of({ type: ActionTypes.REQUEST_MOVIES });

    effects.requestMovies$.subscribe((action) => {
      expect(action.type).toBe(ActionTypes.SET_MOVIES);
      expect(action.payload).toEqual({ total: movieList.length, body: movieList });
    });
  });

  it('should dispatch "createMovieSuccess" action when "requestCreateMovie" action is dispatched', () => {
    dataService.createMovie.and.returnValue(of(movieList[0]));
    actions$ = of({ type: ActionTypes.REQUEST_CREATE_MOVIE });

    effects.requestCreateMovie$.subscribe((action) => {
      expect(action.type).toBe(ActionTypes.CREATE_MOVIE_SUCCESS);
      expect(action.payload).toEqual(movieList[0]);
    });
  });

  it('should dispatch "updateMovieSuccess" action when "requestUpdateMovie" action is dispatched', () => {
    dataService.updateMovie.and.returnValue(of(movieList[0]));
    actions$ = of({ type: ActionTypes.REQUEST_UPDATE_MOVIE });

    effects.requestUpdateMovie$.subscribe((action) => {
      expect(action.type).toBe(ActionTypes.UPDATE_MOVIE_SUCCESS);
      expect(action.payload).toEqual(movieList[0]);
    });
  });

  it('should dispatch "deleteMovieSuccess" action when "requestDeleteMovie" action is dispatched', () => {
    const respMessage = 'Movie deleted successfully';
    dataService.deleteMovie.and.returnValue(of(respMessage));
    actions$ = of({ type: ActionTypes.REQUEST_DELETE_MOVIE });

    effects.requestDeleteMovie$.subscribe((action) => {
      expect(action.type).toBe(ActionTypes.DELETE_MOVIE_SUCCESS);
      expect(action.payload).toEqual(respMessage);
    });
  });
});
