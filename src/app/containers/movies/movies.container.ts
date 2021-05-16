import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { DefaultPagination } from 'src/app/core/constants/movies.constants';
import { RoutePath } from 'src/app/core/constants/routes.constants';
import { Movie } from 'src/app/core/models/movies.model';
import { ActionTypes, requestMovies, setMovies, setPagination } from './store/movies.actions';
import { Pagination } from './store/movies.reducer';
import { selectMoviesList, selectNumTotalMovies, selectPagination } from './store/movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.container.html',
  styleUrls: ['./movies.container.scss'],
})
export class MoviesContainer implements OnInit, OnDestroy {
  routePath = RoutePath;
  page = DefaultPagination.PAGE;
  limit = DefaultPagination.LIMIT; // TODO: Create input field to user can select it

  totalMovies$: Observable<number> = this.store.select(selectNumTotalMovies);

  pagination$: Observable<Pagination> = this.store.select(selectPagination).pipe(
    tap((pag: Pagination) => {
      this.page = pag.page;
      this.limit = pag.limit;
    })
  );

  movies$: Observable<Movie[]> = this.store.select(selectMoviesList).pipe(
    filter((movies: Movie[][]) => movies.length > 0),
    map((movies) => (movies[this.page]?.length ? movies[this.page] : [])),
    map((movies: Movie[]) => movies.slice().sort((a: Movie, b: Movie) => b.id - a.id))
  );

  private subscriptions: Subscription = new Subscription();

  constructor(
    private store: Store,
    private actions$: Actions,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(setPagination({ payload: { page: this.page, limit: this.limit } }));
    this.getMovies(this.page);

    this.subscriptions.add(
      this.actions$.pipe(ofType(ActionTypes.MOVIES_SUCCESS)).subscribe(
        (res: { payload: Movie[] }) => {
          this.store.dispatch(setMovies({ payload: { page: this.page, list: res.payload } }));
        },
        (err) => {
          this.toastService.error(err.message);
        }
      )
    );
  }

  getMovies(page: number, limit = this.limit) {
    this.page = page;
    this.store.dispatch(setPagination({ payload: { page: this.page, limit } }));
    this.store.dispatch(requestMovies({ payload: { page: this.page, limit } }));
  }

  trackByFn(index: number, movie: Movie): number {
    return movie.id;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
