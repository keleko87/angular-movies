import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Translation } from '@ngneat/transloco';
import { NavMenuItem } from '../components/nav-menu/nav-menu.model';
import { RoutePath } from '../constants/routes.constants';

@Injectable({ providedIn: 'root' })
export class NavMenuService {
  constructor(private router: Router) {}

  setNavMenu(translations: Translation): NavMenuItem[] {
    return Object.entries(translations).map((item) => {
      return {
        path: item[0],
        label: item[1],
      };
    });
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
