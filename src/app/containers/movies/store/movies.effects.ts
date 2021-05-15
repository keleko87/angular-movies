import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { MoviesApiService } from 'src/app/core/api/services/movies-api.service';
import { Movie } from 'src/app/core/models/movies.model';
import {
  ActionTypes,
  createMovieSuccess,
  deleteMovieSuccess,
  updateMovieSuccess,
} from './movies.actions';

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions, private api: MoviesApiService) {}

  // Get Movies
  requestMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.REQUEST_MOVIES),
      concatMap((action: { payload }) =>
        this.api.getMovies(action.payload).pipe(
          map((res) => ({
            total: Number(res.headers.get('X-Total-Count')),
            body: res.body,
          })),
          switchMap(({ total, body }) => [
            { type: ActionTypes.SET_TOTAL_MOVIES, payload: total },
            { type: ActionTypes.MOVIES_SUCCESS, payload: body },
          ]),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // Create movie
  requestCreateMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.REQUEST_CREATE_MOVIE),
      exhaustMap((action: { payload }) =>
        this.api.createMovie(action.payload).pipe(
          map((res: Movie) => createMovieSuccess({ payload: res })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // Update movie
  requestUpdateMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.REQUEST_UPDATE_MOVIE),
      exhaustMap((action: { payload }) =>
        this.api.updateMovie(action.payload).pipe(
          map((res: Movie) => updateMovieSuccess({ payload: res })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // Delete movie
  requestDeleteMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.REQUEST_DELETE_MOVIE),
      exhaustMap((action: { payload }) =>
        this.api.deleteMovie(action.payload).pipe(
          map((res: {}) => deleteMovieSuccess({ payload: res })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
