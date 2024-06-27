import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { todosReducer, TodoState } from '../store/reducers/app.reducer';
import { cartReducer, productState } from '../store/reducers/cart.reducer';

export interface AppState {
  todos: TodoState;
  products: productState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
  products: cartReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
