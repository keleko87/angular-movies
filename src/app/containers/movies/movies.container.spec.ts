import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoModule } from '@ngneat/transloco';
import { Store, StoreModule } from '@ngrx/store';
import { MoviesContainer } from './movies.container';
import { reducer, movieKey } from './store/movies.reducer';

export class mockStore {
  select = jasmine.createSpy('select');
  dispatch = jasmine.createSpy('dispatch');
}

describe('MoviesContainer', () => {
  let component: MoviesContainer;
  let fixture: ComponentFixture<MoviesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesContainer],
      imports: [
        TranslocoModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(movieKey, reducer),
      ],
      providers: [{ provide: Store, useClass: mockStore }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
