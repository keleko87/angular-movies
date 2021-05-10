import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/core/models/movies.model';
import { setMovies } from './movies.actions';

export interface MovieState {
  list: Movie[];
}

export const initialState: MovieState = {
  list: [],
};

export const movieKey = 'movie';

const _reducer = createReducer(
  initialState,
  on(setMovies, (state, action) => ({
    ...state,
    list: action.payload,
  }))
);

export function reducer(state, action) {
  return _reducer(state, action);
}
