import { Component, Input, OnInit } from '@angular/core';
import { NavMenu } from './nav-menu.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Input() config: NavMenu;

  constructor() {}

  ngOnInit(): void {}
}
