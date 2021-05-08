import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import {
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';
import { TranslateLoaderService } from './services/translate-loader.service';
import { environment } from 'src/environments/environment';
import { CoreEffects } from './store/core.effects';
import * as coreReducer from './store/core.reducer';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslocoModule,
    StoreModule.forRoot({ core: coreReducer.reducer }),
    EffectsModule.forRoot([CoreEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['es'],
        defaultLang: 'es',
        prodMode: environment.production,
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslateLoaderService },
  ],
})
export class CoreModule {}
