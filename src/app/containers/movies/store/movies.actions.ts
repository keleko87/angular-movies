import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/core/models/movies.model';

export enum ActionTypes {
  REQUEST_MOVIES = `[MOVIES] Request movies list`,
  SET_MOVIES = `[MOVIES] Set movies list`,

  REQUEST_CREATE_MOVIE = `[MOVIES] Request create movie`,
  CREATE_MOVIE_SUCCESS = `[MOVIES] Create movie SUCCESS`,

  REQUEST_UPDATE_MOVIE = `[MOVIES] Request update movie`,
  UPDATE_MOVIE_SUCCESS = `[MOVIES] Update movie SUCCESS`,

  REQUEST_DELETE_MOVIE = `[MOVIES] Request delete movie`,
  DELETE_MOVIE_SUCCESS = `[MOVIES] Delete movie SUCCESS`,
}

// LIST
export const requestMovies = createAction(ActionTypes.REQUEST_MOVIES);

export const setMovies = createAction(ActionTypes.SET_MOVIES, props<{ payload: Movie[] }>());

// CREATE
export const requestCreateMovie = createAction(
  ActionTypes.REQUEST_CREATE_MOVIE,
  props<{ payload: Movie }>()
);

export const createMovieSuccess = createAction(
  ActionTypes.CREATE_MOVIE_SUCCESS,
  props<{ payload: Movie }>()
);

// UPDATE
export const requestUpdateMovie = createAction(
  ActionTypes.REQUEST_UPDATE_MOVIE,
  props<{ payload: Movie }>()
);

export const updateMovieSuccess = createAction(
  ActionTypes.UPDATE_MOVIE_SUCCESS,
  props<{ payload: Movie }>()
);

// DELETE
export const requestDeleteMovie = createAction(
  ActionTypes.REQUEST_DELETE_MOVIE,
  props<{ payload: number }>()
);

export const deleteMovieSuccess = createAction(
  ActionTypes.DELETE_MOVIE_SUCCESS,
  props<{ payload: string }>()
);
