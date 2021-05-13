import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { RoutePath } from 'src/app/core/constants/routes.constants';
import { Movie } from 'src/app/core/models/movies.model';
import { requestMovies } from './store/movies.actions';
import { selectMoviesList } from './store/movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.container.html',
  styleUrls: ['./movies.container.scss'],
})
export class MoviesContainer {
  routePath = RoutePath;

  movies$: Observable<Movie[]> = this.store.select(selectMoviesList).pipe(
    filter((movies: Movie[]) => movies.length > 0),
    map((movies: Movie[]) => movies.slice().sort((a: Movie, b: Movie) => b.id - a.id))
  );

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(requestMovies());
  }
}
