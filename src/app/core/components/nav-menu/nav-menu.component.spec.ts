import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenuMockService } from 'tests/mocks/nav-menu-mock';
import { NavMenuService } from '../../services/nav-menu.service';

import { NavMenuComponent } from './nav-menu.component';
import { NavMenu } from './nav-menu.model';

describe('NavMenuComponent', () => {
  const config: NavMenu = { items: [{ label: 'Pelis', path: 'movies' }] };

  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavMenuComponent],
      providers: [{ provide: NavMenuService, useClass: NavMenuMockService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the route when click in menu link', () => {
    const spy = spyOn(component, 'navigateTo').and.callThrough();
    component.config = config;
    fixture.detectChanges();

    let menuLink = fixture.debugElement.nativeElement.querySelectorAll('a')[0];
    menuLink.click();

    expect(spy).toHaveBeenCalled();
  });
});
