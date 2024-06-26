import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { todosReducer, TodoState } from '../store/reducers/app.reducers';

export interface AppState {
  todos: TodoState
}

export const reducers: ActionReducerMap<AppState> = {
  todos: todosReducer
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
