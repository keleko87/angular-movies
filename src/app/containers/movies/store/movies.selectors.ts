import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieState, movieKey } from './movies.reducer';

export const selectMovies = createFeatureSelector<MovieState>(movieKey);

export const selectMoviesList = createSelector(selectMovies, (state: MovieState) => state.list);
export const selectNumTotalMovies = createSelector(
  selectMovies,
  (state: MovieState) => state.total
);
export const selectPagination = createSelector(
  selectMovies,
  (state: MovieState) => state.pagination
);
