import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { MoviesContainer } from './movies.container';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [MoviesContainer],
  imports: [CommonModule, MoviesRoutingModule, TranslocoModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'movies' }],
})
export class MoviesModule {}
