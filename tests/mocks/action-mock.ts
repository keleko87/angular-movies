import { Action, ActionsSubject } from '@ngrx/store';

const MOCK_ACTION = '[MOCK] ACTION';

export const MockActions = new ActionsSubject();

export class MockAction implements Action {
  readonly type = MOCK_ACTION;
  readonly payload: unknown;

  constructor(payload?: unknown) {
    this.payload = payload;
  }
}
