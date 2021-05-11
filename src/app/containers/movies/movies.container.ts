import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Movie } from 'src/app/core/models/movies.model';
import { requestMovies } from './store/movies.actions';
import { selectMoviesList } from './store/movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.container.html',
})
export class MoviesContainer {
  movies$: Observable<Movie[]> = this.store.select(selectMoviesList).pipe(
    tap(() => {
      this.store.dispatch(requestMovies());
    })
  );

  constructor(private store: Store) {}
}
