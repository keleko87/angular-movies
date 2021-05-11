import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Translation } from '@ngneat/transloco';
import { NavMenuItem } from '../components/nav-menu/nav-menu.model';

import { NavMenuService } from './nav-menu.service';

describe('NavMenuService', () => {
  let router: Router;
  let service: NavMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
    });

    service = TestBed.inject(NavMenuService);
    router = TestBed.inject(Router);
  });

  it('should set navigation menu when "setNavMenu" is called', () => {
    const translationsMock: Translation = {
      home: 'inicio',
    };
    const navMenu: NavMenuItem[] = [
      {
        label: translationsMock.home,
        path: 'home',
      },
    ];

    const spy = spyOn(service, 'setNavMenu').and.callThrough();
    const menuMock: NavMenuItem[] = service.setNavMenu(translationsMock);

    expect(spy).toHaveBeenCalledWith(translationsMock);
    expect(menuMock[0].path).toEqual(navMenu[0].path);
  });

  it('should navigate to route when "navigateTo" is called', () => {
    const route = '';
    const spy = spyOn(service, 'navigateTo').and.callThrough();
    service.navigateTo(route);
    expect(spy).toHaveBeenCalledWith(route);
  });
});
