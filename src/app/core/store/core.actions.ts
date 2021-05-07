import { createAction } from '@ngrx/store';

export enum ActionTypes {
  // EXAMPLES
  REQUEST_LOGIN_FAKE = `[CORE] Request login fake`,
  LOGIN_FAKE_SUCCESS = `[CORE] Login fake success`,
}

export const requestLoginFake = createAction(ActionTypes.REQUEST_LOGIN_FAKE);
export const loginFakeSuccess = createAction(ActionTypes.LOGIN_FAKE_SUCCESS);
