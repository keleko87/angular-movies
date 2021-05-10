import { Injectable } from '@angular/core';
import { Translation } from '@ngneat/transloco';
import { NavMenuItem } from '../components/nav-menu/nav-menu.model';

@Injectable({ providedIn: 'root' })
export class NavMenuService {
  constructor() {}

  setNavMenu(translations: Translation): NavMenuItem[] {
    return Object.entries(translations).map((item) => ({
      path: item[0],
      label: item[1],
    }));
  }
}
