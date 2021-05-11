import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
  TranslocoModule,
} from '@ngneat/transloco';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './core/components/loader/loader.component';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { TranslateLoaderService } from './core/services/translate-loader.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, LoaderComponent],
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
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    TranslocoModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      maxOpened: 1,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
