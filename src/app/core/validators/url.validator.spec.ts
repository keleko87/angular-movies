import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';

import { ValidateURL } from './url.validator';

describe('ValidateURL', () => {
  const control = new FormControl('input');

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should return "{ urlError: true }" if input value is not valid URL', () => {
    control.setValue('example');
    expect(ValidateURL(control)).toEqual({ urlError: true });
  });

  it('should return "null" if input string is a valid URL', () => {
    control.setValue('https://example.com');
    expect(ValidateURL(control)).toBeNull();
  });

  it('should return "null" if no form control is added', () => {
    control.setValue('example.com');
    expect(ValidateURL(null)).toBeNull();
  });
});
