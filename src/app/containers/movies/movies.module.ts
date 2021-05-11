import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { MoviesContainer } from './movies.container';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesEffects } from './store/movies.effects';
import { reducer, movieKey } from './store/movies.reducer';

@NgModule({
  declarations: [MoviesContainer],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    TranslocoModule,
    StoreModule.forFeature(movieKey, reducer),
    EffectsModule.forFeature([MoviesEffects]),
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'movies' }],
})
export class MoviesModule {}
