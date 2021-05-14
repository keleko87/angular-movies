import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { movieList } from 'tests/fixtures/movies-fixture';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let image;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    image = fixture.debugElement.query(By.css('.mov__image'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set "isLoading" to false when the image is loaded successfully', () => {
    component.image = movieList[0].poster;

    image.triggerEventHandler('load', {});
    fixture.detectChanges();

    expect(component.isLoading).toBeFalse();
  });

  it('should set "default image" when ERROR during load image', () => {
    const spy = spyOn(component, 'setDefaultImage').and.callThrough();

    image.triggerEventHandler('error', {});

    expect(spy).toHaveBeenCalled();
    expect(component.image).toBe(component.defaultImage);
  });
});
