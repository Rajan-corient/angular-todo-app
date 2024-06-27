import { createAction, props } from '@ngrx/store';
import { Iproduct } from '../../shopping/shopping.model';

export const loadProducts = createAction('[Cart] Load Products');

export const loadProductsSuccess = createAction(
  '[Cart] Load Product Success',
  props<{ products: Iproduct[] }>()
);
export const loadProductsFailure = createAction(
  '[Cart] Load Product Failure',
  props<{ error: any }>()
);

export const addProduct = createAction(
  '[Cart] Add Product',
  props<{ product: Iproduct }>()
);

export const removeProduct = createAction(
  '[Cart] Remove Product',
  props<{ productId: number }>()
);
