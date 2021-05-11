import { Movie } from 'src/app/core/models/movies.model';
import { MovieState } from './movies.reducer';
import { selectMoviesList } from './movies.selectors';

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
} = {}) => ({
  list,
});

const createState = ({ list = createMovieState() } = {}): MovieState => ({
  ...list,
});

describe('Store > Movies > Selectors', () => {
  it('selectMoviesList', () => {
    const state = createState();
    expect(selectMoviesList.projector(state)).toBe(state.list);
  });
});
