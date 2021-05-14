import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { TranslocoModule } from '@ngneat/transloco';
import { Store, StoreModule } from '@ngrx/store';
import { Movie } from 'src/app/core/models/movies.model';
import { movieList } from 'tests/fixtures/movies-fixture';
import { MoviesContainer } from './movies.container';
import { setMovies } from './store/movies.actions';
import { reducer, movieKey } from './store/movies.reducer';
import { selectMoviesList } from './store/movies.selectors';

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
      providers: [Store],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesContainer);
    component = fixture.componentInstance;

    injector = getTestBed();
    store = injector.inject(Store);
    injector = getTestBed();

    fixture.detectChanges();
  });

  it('should dispatch #requestMovies action on init', () => {
    const spy = spyOn(store, 'dispatch').and.callThrough();
    component.ngOnInit();

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should return Observable<Movie[]> from movies store when subscribe #selectMoviesList', () => {
    store.dispatch(setMovies({ payload: movieList }));
    store.select(selectMoviesList).subscribe((res: Movie[]) => {
      expect(res.length).toBe(movieList.length);
    });
  });
});
