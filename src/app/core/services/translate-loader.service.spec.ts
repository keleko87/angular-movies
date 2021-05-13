import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Translation } from '@ngneat/transloco';
import { HttpVerbs } from 'tests/mocks/api-mock.service';
import { TranslateLoaderService } from './translate-loader.service';

describe('TranslateLoaderService', () => {
  const langPath = 'es';

  let service: TranslateLoaderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(TranslateLoaderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<Translation> when call #getTranslation', () => {
    service.getTranslation(langPath).subscribe((translations: Translation) => {
      expect(translations).toBeDefined();
    });

    const req = httpMock.expectOne(`/assets/i18n/${langPath}.json`);
    expect(req.request.method).toBe(HttpVerbs.GET);
    req.flush(langPath);
  });
});
