import * as moviesReducer from './movies.reducer';
import * as moviesActions from './movies.actions';
import { movieList } from '../../../../../tests/fixtures/movies-fixture';

describe('Store > Movies > Reducer', () => {
  it('should return the default state', () => {
    const { initialState } = moviesReducer;
    const state = moviesReducer.reducer(undefined, { type: null });

    expect(state).toBe(initialState);
  });

  it('should movies data set in store', () => {
    const { initialState } = moviesReducer;

    const action = moviesActions.setMovies({ payload: movieList });
    const state = moviesReducer.reducer(initialState, action);

    expect(state.list).toEqual(movieList);
  });
});
