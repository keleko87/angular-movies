import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { TranslateLoaderService } from './core/services/translate-loader.service';

@NgModule({
  declarations: [AppComponent],
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
  imports: [BrowserModule, AppRoutingModule, CoreModule, TranslocoModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
