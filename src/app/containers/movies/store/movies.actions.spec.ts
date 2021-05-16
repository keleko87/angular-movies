import { createMovieSuccess, requestCreateMovie, requestMovies, setMovies } from './movies.actions';
import { ActionTypes } from './movies.actions';
import { movieList } from '../../../../../tests/fixtures/movies-fixture';
import { PaginationMock } from 'tests/mocks/pagination-mock';

const payloadMock = { page: PaginationMock.page, list: movieList };

describe('RequestMovies', () => {
  it('should create an action', () => {
    const action = requestMovies({ payload: PaginationMock });
    expect(action.type).toEqual(ActionTypes.REQUEST_MOVIES);
  });
});

describe('SetMovies', () => {
  it('should create an action', () => {
    const action = setMovies({ payload: payloadMock });

    expect({ ...action }).toEqual({
      type: ActionTypes.SET_MOVIES,
      payload: payloadMock,
    });
  });
});

describe('RequestCreateMovie', () => {
  it('should create an action', () => {
    const action = requestCreateMovie({ payload: movieList[0] });
    expect(action).toEqual({
      type: ActionTypes.REQUEST_CREATE_MOVIE,
      payload: movieList[0],
    });
  });
});

describe('CreateMovieSucces', () => {
  it('should create an action', () => {
    const action = createMovieSuccess({ payload: movieList[0] });

    expect({ ...action }).toEqual({
      type: ActionTypes.CREATE_MOVIE_SUCCESS,
      payload: movieList[0],
    });
  });
});
