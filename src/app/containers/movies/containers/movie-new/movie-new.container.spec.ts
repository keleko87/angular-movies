import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieNewContainer } from './movie-new.container';

describe('MovieNewContainer', () => {
  let component: MovieNewContainer;
  let fixture: ComponentFixture<MovieNewContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieNewContainer],
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
