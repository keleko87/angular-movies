import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormUtilsService {
  markFormControlsAsDirty(form: FormGroup) {
    Object.values(form.controls).forEach((control: FormGroup) => {
      control.markAsDirty();
    });
  }
}
