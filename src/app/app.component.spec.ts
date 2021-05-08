import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslocoTestingModule } from '@ngneat/transloco';

describe('AppComponent', () => {
  let comp: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslocoTestingModule],
      declarations: [AppComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });
});
