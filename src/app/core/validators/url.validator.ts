import { AbstractControl } from '@angular/forms';

export const urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

export function ValidateURL(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value != null || (typeof control.value === 'string' && control.value.length !== 0)) {
    return urlPattern.test(control.value) ? null : { url: true };
  }

  return null;
}
