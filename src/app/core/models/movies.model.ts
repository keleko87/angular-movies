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
}
