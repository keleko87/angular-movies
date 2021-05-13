import {
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoaderService } from '../../services/loader.service';
import { LoaderInterceptorService } from './loader-interceptor.service';
import { ApiMockService, BASE_PATH } from 'tests/mocks/api-mock.service';

describe('LoaderInterceptorService', () => {
  let injector: TestBed;
  let mockService: ApiMockService;
  let loaderService: LoaderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptorService,
          multi: true,
        },
      ],
    });

    injector = getTestBed();
    loaderService = injector.inject(LoaderService);
    mockService = injector.inject(ApiMockService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('when no error, then subscribe returns the event', () => {
    mockService.getPosts().subscribe(
      (res) => expect(res).toBeTruthy(),
      (error: HttpErrorResponse) => console.log(error)
    );

    const httpReq = httpMock.expectOne(`${BASE_PATH}/posts`);

    const expectedResponse = new HttpResponse<string>({
      status: 200,
      statusText: 'OK',
      body: '',
      headers: {} as HttpHeaders,
    });

    httpReq.flush(expectedResponse);

    expect(loaderService.isLoading).toBeTruthy();
  });

  it('when error, then subscribe returns error', () => {
    mockService.getPosts().subscribe(
      (res) => console.log(res),
      (error: HttpErrorResponse) => expect(error).toBeTruthy()
    );

    const httpReq = httpMock.expectOne(`${BASE_PATH}/posts`);
    httpReq.error(null, { status: 404 });
  });
});
