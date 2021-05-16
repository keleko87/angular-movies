import { MovieGenre } from '../models/movies.model';

export const Genres: MovieGenre[] = [
  MovieGenre.COMEDY,
  MovieGenre.MUSICAL,
  MovieGenre.ROMANCE,
  MovieGenre.SCI_FI,
  MovieGenre.ACTION,
  MovieGenre.ANIMATION,
  MovieGenre.HORROR,
  MovieGenre.THRILLER,
  MovieGenre.WAR,
  MovieGenre.DRAMA,
];

export const MovieFormField = {
  YEAR_MAXLENGTH: 4,
  DURATION_MAXLENTH: 3,
  RATING_MAXLENGTH: 4,
  MIN_FRACTION_DIGITS: 2,
};

export const DefaultPagination = {
  PAGE: 1,
  LIMIT: 10,
};
