import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { CoreEffects } from './store/core.effects';
import { environment } from 'src/environments/environment';
import * as coreReducer from './store/core.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ core: coreReducer.reducer }),
    EffectsModule.forRoot([CoreEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
})
export class CoreModule {}
