import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { TranslocoModule } from '@ngneat/transloco';
import { Actions } from '@ngrx/effects';
import { ActionsSubject, Store, StoreModule } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

import { Movie } from 'src/app/core/models/movies.model';
import { movieList } from 'tests/fixtures/movies-fixture';
import { MockMovieListAction } from 'tests/mocks/action-mock';
import { ToastrMock } from 'tests/mocks/toastr-mock.service';
import { MoviesContainer } from './movies.container';
import { ActionTypes, setMovies } from './store/movies.actions';
import { reducer, movieKey, Pagination } from './store/movies.reducer';
import { selectMoviesList, selectNumTotalMovies, selectPagination } from './store/movies.selectors';

describe('MoviesContainer', () => {
  let component: MoviesContainer;
  let fixture: ComponentFixture<MoviesContainer>;
  let injector: TestBed;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesContainer],
      imports: [
        TranslocoModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(movieKey, reducer),
      ],
      providers: [
        Store,
        { provide: Actions, useValue: MockMovieListAction },
        { provide: ToastrService, useValue: ToastrMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesContainer);
    component = fixture.componentInstance;

    injector = getTestBed();
    store = injector.inject(Store);

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should dispatch #requestMovies action on init', () => {
    const spy = spyOn(store, 'dispatch').and.callThrough();
    component.ngOnInit();

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should return Observable<Movie[]> from movies store when subscribe #selectMoviesList', () => {
    store.dispatch(setMovies({ payload: { page: 1, list: movieList } }));
    store.select(selectMoviesList).subscribe((res: Movie[][]) => {
      expect(res.length).toBeDefined();
    });
  });

  it('should return Observable<Pagination> when subscribe #selectPagination', () => {
    store.dispatch(setMovies({ payload: { page: 1, list: movieList } }));
    store.select(selectPagination).subscribe((pag: Pagination) => {
      expect(pag.page).toBeDefined();
      expect(pag.limit).toBeDefined();
    });
  });

  it('should return Observable<number> when subscribe #selectTotal', () => {
    store.dispatch(setMovies({ payload: { page: 1, list: movieList } }));
    store.select(selectNumTotalMovies).subscribe((total: number) => {
      expect(total).toBeDefined();
    });
  });

  it('should show SUCCESS message when action subscription emit OK response', () => {
    const action = {
      type: ActionTypes.MOVIES_SUCCESS,
    };

    const actionSubject = TestBed.inject(Actions) as ActionsSubject;
    actionSubject.next(action);

    actionSubject.subscribe((action) => {
      expect(action.type).toBe(ActionTypes.MOVIES_SUCCESS);
    });
  });

  it('should #trackByFn return movie id in movie list', () => {
    const spy = spyOn(component, 'trackByFn').and.callThrough();
    const res = component.trackByFn(1, movieList[0]);

    expect(spy).toHaveBeenCalledWith(1, movieList[0]);
    expect(res).toBeInstanceOf(Number);
  });
});
