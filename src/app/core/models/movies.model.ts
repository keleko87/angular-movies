export interface Movie {
  id: number;
  title: string;
  poster: string;
  genre: MovieGenre[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: number[];
}

export enum MovieGenre {
  COMEDY = 'Comedy',
  MUSICAL = 'Musical',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-fi',
  ACTION = 'Action',
  ANIMATION = 'Animation',
  HORROR = 'Horror',
  THRILLER = 'Thriller',
  WAR = 'War',
  DRAMA = 'Drama',
}
