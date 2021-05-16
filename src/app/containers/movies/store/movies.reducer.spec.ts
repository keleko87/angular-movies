import * as moviesReducer from './movies.reducer';
import * as moviesActions from './movies.actions';
import { movieList } from '../../../../../tests/fixtures/movies-fixture';
import { PaginationMock } from 'tests/mocks/pagination-mock';

describe('Store > Movies > Reducer', () => {
  const mockState = {
    list: [null, movieList],
    total: movieList.length,
    pagination: PaginationMock,
  };

  const { initialState } = moviesReducer;

  it('should return the default state', () => {
    const state = moviesReducer.reducer(undefined, { type: null });
    expect(state).toBe(initialState);
  });

  it('should "movies data" set in store', () => {
    const actionMovies = moviesActions.setMovies({ payload: { page: 1, list: mockState.list[1] } });
    const state = moviesReducer.reducer(initialState, actionMovies);
    expect(state.list.length).toEqual(mockState.list.length);
  });

  it('should "total number of movies" data set in store', () => {
    const actionTotalMovies = moviesActions.setTotalMovies({ payload: mockState.total });
    const state = moviesReducer.reducer(initialState, actionTotalMovies);
    expect(state.total).toEqual(mockState.total);
  });

  it('should "pagination" data set in store', () => {
    const actionPagination = moviesActions.setPagination({
      payload: { page: mockState.pagination.page, limit: mockState.pagination.limit },
    });
    const state = moviesReducer.reducer(initialState, actionPagination);
    expect(state.pagination).toEqual(mockState.pagination);
  });
});
