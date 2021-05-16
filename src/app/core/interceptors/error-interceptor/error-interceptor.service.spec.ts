import { HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { ApiMockService, BASE_PATH } from 'tests/mocks/api-mock.service';
import { ErrorInterceptorService } from './error-interceptor.service';
import { ToastrMock } from 'tests/mocks/toastr-mock.service';

describe('ErrorInterceptorService', () => {
  let injector: TestBed;
  let mockService: ApiMockService;
  let toastService: ToastrService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptorService,
          multi: true,
        },
        { provide: ToastrService, useValue: ToastrMock },
      ],
    });

    injector = getTestBed();
    toastService = injector.inject(ToastrService);
    mockService = injector.inject(ApiMockService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('when error, then show toastr error', () => {
    const spy = spyOn(toastService, 'error').and.callThrough();

    mockService.getPosts().subscribe(
      (res) => console.log(res),
      (error: HttpErrorResponse) => {
        expect(error).toBeTruthy();
        expect(spy).toHaveBeenCalled();
      }
    );

    const httpReq = httpMock.expectOne(`${BASE_PATH}/posts`);
    httpReq.error(null, { status: 404 });
  });
});
