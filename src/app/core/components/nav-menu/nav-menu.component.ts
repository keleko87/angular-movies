import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NavMenuService } from '../../services/nav-menu.service';
import { NavMenu } from './nav-menu.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  @ViewChild('toggleIcon') toggleIcon: ElementRef<HTMLElement>;

  @Input() config: NavMenu;

  constructor(private navMenuService: NavMenuService) {}

  navigateTo(path: string) {
    this.toggleIcon.nativeElement.click();
    this.navMenuService.navigateTo(path);
  }
}
