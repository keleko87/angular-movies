import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Actions } from '@ngrx/effects';
import { ActionsSubject, Store, StoreModule } from '@ngrx/store';
import { TranslocoModule } from '@ngneat/transloco';
import { ToastrService } from 'ngx-toastr';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

import { MockActions } from 'tests/mocks/action-mock';
import { MockStore } from 'tests/mocks/store-mock';
import { movieKey, reducer } from '../../store/movies.reducer';
import { MovieNewContainer } from './movie-new.container';
import { FormUtilsService } from 'src/app/core/utils/form-utils.service';
import { FormUtilsMock } from 'tests/mocks/form-utils-mock';
import { ActionTypes } from '../../store/movies.actions';
import { ToastrMock } from 'tests/mocks/toastr-mock.service';

const formMockValues = {
  title: 'Movie 1',
  poster: null,
  genre: ['Comedy'],
  actors: [1, 2],
  year: 2000,
  duration: 123,
  imdbRating: 2.12,
};

describe('MovieNewContainer', () => {
  let injector: TestBed;
  let component: MovieNewContainer;
  let formUtilsService: FormUtilsService;
  let store: Store;
  let fixture: ComponentFixture<MovieNewContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieNewContainer],
      imports: [
        TranslocoModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        InputNumberModule,
        MultiSelectModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(movieKey, reducer),
      ],
      providers: [
        { provide: FormUtilsService, useValue: FormUtilsMock },
        { provide: Store, useClass: MockStore },
        { provide: Actions, useValue: MockActions },
        { provide: ToastrService, useValue: ToastrMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNewContainer);
    component = fixture.componentInstance;

    injector = getTestBed();
    store = injector.inject(Store);
    formUtilsService = injector.inject(FormUtilsService);

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create form on init', async () => {
    const form = component.form;

    expect(form.controls).toBeTruthy();
    expect(form.controls.title).toBeDefined();
    expect(form.controls.poster).toBeDefined();
    expect(form.controls.genre).toBeDefined();
    expect(form.controls.actors).toBeDefined();
    expect(form.controls.year).toBeDefined();
    expect(form.controls.duration).toBeDefined();
    expect(form.controls.imdbRating).toBeDefined();
  });

  it('should validate form fields when click submit button', async () => {
    const submitFormSpy = spyOn(component, 'submitForm').and.callThrough();

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(submitFormSpy).toHaveBeenCalled();
      expect(formUtilsService.markFormControlsAsDirty).toHaveBeenCalled();
    });
  });

  it('should dispatch #requestCreateMovie action when click submit button and form is valid', async () => {
    const submitFormSpy = spyOn(component, 'submitForm').and.callThrough();

    component.form.patchValue(formMockValues);
    fixture.detectChanges();

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(submitFormSpy).toHaveBeenCalled();
      expect(store.dispatch).toHaveBeenCalled();
    });
  });

  it('should show SUCCESS message when action subscription emit OK response', async () => {
    component.form.patchValue(formMockValues);
    fixture.detectChanges();

    const actionSubject = TestBed.inject(Actions) as ActionsSubject;
    const action = {
      type: ActionTypes.CREATE_MOVIE_SUCCESS,
    };

    actionSubject.next(action);

    actionSubject.subscribe((action) => {
      expect(action.type).toBe(ActionTypes.CREATE_MOVIE_SUCCESS);
    });
  });
});
