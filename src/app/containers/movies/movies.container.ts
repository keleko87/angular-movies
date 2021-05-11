import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, share, take, tap } from 'rxjs/operators';

import { Movie } from 'src/app/core/models/movies.model';
import { requestMovies } from './store/movies.actions';
import { selectMoviesList } from './store/movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.container.html',
  styleUrls: ['./movies.container.scss'],
})
export class MoviesContainer {
  movies$: Observable<Movie[]> = this.store.select(selectMoviesList);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(requestMovies());
  }
}
