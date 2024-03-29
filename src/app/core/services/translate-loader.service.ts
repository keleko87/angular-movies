import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Translation, TRANSLOCO_LOADER, TranslocoLoader } from '@ngneat/transloco';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslateLoaderService implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(langPath: string): Observable<Translation> {
    return this.http.get<Translation>(`/assets/i18n/${langPath}.json`);
  }
}

export const translateHttpLoader = { provide: TRANSLOCO_LOADER, useClass: TranslateLoaderService };
