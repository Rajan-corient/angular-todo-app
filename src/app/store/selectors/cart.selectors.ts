import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productState } from '../reducers/cart.reducer';

export const selectProductState =
  createFeatureSelector<productState>('products');

export const selectProducts = createSelector(
  selectProductState,
  (state: productState) => state.products
);

export const selectLoading = createSelector(
  selectProductState,
  (state: any) => state.loading
);

export const selectError = createSelector(
  selectProductState,
  (state: any) => state.error
);
