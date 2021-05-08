import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslocoService, Translation } from '@ngneat/transloco';
import { Subscription } from 'rxjs';

import { NavMenu } from './core/components/nav-menu/nav-menu.model';
import { RoutePath } from './core/constants/routes.constants';
import { NavMenuService } from './core/services/nav-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  routePath = RoutePath;
  menuConfig: NavMenu = {
    items: [],
  };

  private subscriptions: Subscription = new Subscription();

  constructor(private translateService: TranslocoService, private navMenuService: NavMenuService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.translateService.selectTranslateObject('menu').subscribe((items: Translation) => {
        debugger;
        this.menuConfig.items = this.navMenuService.setNavMenu(items);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
