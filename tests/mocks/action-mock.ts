import { Action } from '@ngrx/store';
import { Subject } from 'rxjs';

const MOCK_ACTION = '[MOCK] ACTION';

export const MockActions = new Subject();

export class MockAction implements Action {
  readonly type = MOCK_ACTION;
  readonly payload: unknown;

  constructor(payload?: unknown) {
    this.payload = payload;
  }
}
