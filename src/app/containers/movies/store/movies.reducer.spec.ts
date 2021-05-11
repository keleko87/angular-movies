import * as fromReducer from './movies.reducer';
import * as fromActions from './movies.actions';
import { movieList } from '../../../../../tests/fixtures/movies-fixture';

describe('Store > Movies > Reducer', () => {
  afterEach(() => {
    fromReducer.initialState.list = null;
  });

  it('should return the default state', () => {
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(undefined, { type: null });

    expect(state).toBe(initialState);
  });

  it('should movies data set in store', () => {
    const { initialState } = fromReducer;

    const action = fromActions.setMovies({ payload: movieList });
    const state = fromReducer.reducer(initialState, action);

    expect(state.list).toEqual(movieList);
  });
});
