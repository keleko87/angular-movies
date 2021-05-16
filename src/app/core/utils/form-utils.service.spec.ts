import { TestBed } from '@angular/core/testing';
import { formGroupMock } from 'tests/mocks/form-utils-mock';
import { FormUtilsService } from './form-utils.service';

describe('FormUtilsService', () => {
  let service: FormUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUtilsService);
  });

  it('should mark as dirty all controls of the form when call #markFormControlsAsDirty', () => {
    const titleControl = formGroupMock.get('title');
    const imageControl = formGroupMock.get('image');

    service.markFormControlsAsDirty(formGroupMock);

    expect(titleControl.dirty).toBeTrue();
    expect(imageControl.dirty).toBeTrue();
  });
});
