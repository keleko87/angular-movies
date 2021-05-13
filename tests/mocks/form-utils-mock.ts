import { FormControl, FormGroup, Validators } from '@angular/forms';

export const formGroupMock: FormGroup = new FormGroup({
  title: new FormControl('', [Validators.required]),
  image: new FormControl('', []),
});

export const FormUtilsMock = {
  markFormControlsAsDirty: jasmine.createSpy('markFormControlsAsDirty'),
};
