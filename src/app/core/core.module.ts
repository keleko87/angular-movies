import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from 'src/environments/environment';
import { CoreEffects } from './store/core.effects';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import * as coreReducer from './store/core.reducer';

@NgModule({
  declarations: [NavMenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ core: coreReducer.reducer }),
    EffectsModule.forRoot([CoreEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  exports: [NavMenuComponent],
})
export class CoreModule {}
