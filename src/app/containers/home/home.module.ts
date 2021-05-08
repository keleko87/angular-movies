import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { HomeContainer } from './home.container';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeContainer],
  imports: [CommonModule, HomeRoutingModule, TranslocoModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'home' }],
})
export class HomeModule {}
