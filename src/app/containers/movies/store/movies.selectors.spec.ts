import { Movie } from 'src/app/core/models/movies.model';
import { PaginationMock } from 'tests/mocks/pagination-mock';
import { MovieState } from './movies.reducer';
import { selectMoviesList, selectNumTotalMovies, selectPagination } from './movies.selectors';

const createMovie = ({
  id = 0,
  title = '',
  poster = '',
  genre = [],
  year = 2000,
  duration = 129,
  imdbRating = 4.4,
  actors = [1, 3, 4],
} = {}): Movie => ({
  id,
  title,
  poster,
  genre,
  year,
  duration,
  imdbRating,
  actors,
});

const createMovieState = ({
  list = [
    null,
    [
      createMovie({
        id: 1,
        title: 'Braveheart',
        poster: '',
        genre: ['Drama'],
        year: 1996,
        duration: 200,
        imdbRating: 4.5,
        actors: [],
      }),
    ],
  ],
} = {}) => ({
  list,
});

const createTotalState = ({ total = 10 } = {}) => ({
  total,
});

const createPaginationState = ({ pagination = PaginationMock } = {}) => ({
  pagination,
});

const createState = ({
  list = createMovieState(),
  total = createTotalState(),
  pagination = createPaginationState(),
} = {}): MovieState => ({
  ...list,
  ...total,
  ...pagination,
});

describe('Store > Movies > Selectors', () => {
  it('selectMoviesList', () => {
    const state = createState();
    expect(selectMoviesList.projector(state)).toBe(state.list);
  });

  it('selectNumTotalMovies', () => {
    const state = createState();
    expect(selectNumTotalMovies.projector(state)).toBe(state.total);
  });

  it('selectPagination', () => {
    const state = createState();
    expect(selectPagination.projector(state)).toBe(state.pagination);
  });
});
