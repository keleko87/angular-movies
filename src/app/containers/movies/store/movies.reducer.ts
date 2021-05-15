import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/core/models/movies.model';
import { setMovies, setPagination, setTotalMovies } from './movies.actions';

export interface Pagination {
  page: number;
  limit: number;
}

export interface MovieState {
  list: Array<Movie[]>;
  total: number;
  pagination: Pagination;
}

export const initialState: MovieState = {
  list: [],
  total: 0,
  pagination: null,
};

export const movieKey = 'movie';

const _reducer = createReducer(
  initialState,
  on(setMovies, (state, action) => {
    const stateList = [...state.list];
    stateList[action.payload.page] = action.payload.list;

    return {
      ...state,
      list: [...stateList],
    };
  }),
  on(setTotalMovies, (state, action) => ({
    ...state,
    total: action.payload,
  })),
  on(setPagination, (state, action) => ({
    ...state,
    pagination: action.payload,
  }))
);

export function reducer(state, action) {
  return _reducer(state, action);
}
