import { Action, ActionsSubject } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { movieList } from 'tests/fixtures/movies-fixture';

const MOCK_ACTION = '[MOCK] ACTION';

export const MockActions = new ActionsSubject();
export const MockMovieListAction = new BehaviorSubject(movieList);

export class MockAction implements Action {
  readonly type = MOCK_ACTION;
  readonly payload: unknown;

  constructor(payload?: unknown) {
    this.payload = payload;
  }
}
