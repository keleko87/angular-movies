import { createReducer } from '@ngrx/store';

export interface CoreState {
  auth: AuthState;
}

export interface AuthState {
  token: string;
}

export const initialState = {
  auth: {},
};

const _coreReducer = createReducer(
  initialState
  // TODO
);

export function reducer(state, action) {
  return _coreReducer(state, action);
}
