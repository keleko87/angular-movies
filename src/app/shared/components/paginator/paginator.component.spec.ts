import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit "prev" event when click the button', () => {
    const spy = spyOn(component.prev, 'emit').and.callThrough();
    let button = fixture.debugElement.nativeElement.querySelector('.mov-paginator__prev');
    button.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit "next" event when click the button', () => {
    const spy = spyOn(component.next, 'emit').and.callThrough();
    let button = fixture.debugElement.nativeElement.querySelector('.mov-paginator__next');
    button.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should show previous button enabled when page > 1 and totalPages > 1', () => {
    component.total = 10;
    component.perPage = 2;
    component.page = 2;
    fixture.detectChanges();

    expect(component.showPrev).toBeTruthy();
  });
});
