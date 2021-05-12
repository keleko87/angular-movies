import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Actions } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TranslocoModule } from '@ngneat/transloco';
import { ToastrService } from 'ngx-toastr';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

import { MockActions } from 'tests/mocks/action-mock';
import { MockStore } from 'tests/mocks/store-mock';
import { movieKey, reducer } from '../../store/movies.reducer';
import { MovieNewContainer } from './movie-new.container';

describe('MovieNewContainer', () => {
  let component: MovieNewContainer;
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
        { provide: Store, useClass: MockStore },
        { provide: Actions, useValue: MockActions },
        { provide: ToastrService, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNewContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
