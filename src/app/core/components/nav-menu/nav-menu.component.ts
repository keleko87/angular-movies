import { Component, Input } from '@angular/core';
import { NavMenuService } from '../../services/nav-menu.service';
import { NavMenu } from './nav-menu.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  @Input() config: NavMenu;

  constructor(public navMenuService: NavMenuService) {}
}
