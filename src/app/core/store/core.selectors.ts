import { createSelector } from '@ngrx/store';
import { CoreState } from './core.reducer';

export const selectCore = (state: CoreState) => state;

// EXAMPLE
export const selectAuth = createSelector(selectCore, (state: CoreState) => state.auth);
