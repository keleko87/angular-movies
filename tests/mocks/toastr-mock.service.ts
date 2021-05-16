import { IndividualConfig } from 'ngx-toastr';

export const ToastrMock = {
  success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => {},
  error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => {},
};
