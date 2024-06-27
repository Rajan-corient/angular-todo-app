import { createReducer, on } from '@ngrx/store';
import {
  addProduct,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  removeProduct,
} from '../actions/cart.action';
import { Iproduct } from 'src/app/shopping/shopping.model';

export interface productState {
  products: Iproduct[];
  loading: boolean;
  error: any;
}

export const initialState: productState = {
  products: [],
  loading: false,
  error: null,
};

export const cartReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => {
    return {
      ...state,
      products: state.products.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      ),
    };
  }),
  on(removeProduct, (state, { productId }) => {
    return {
      ...state,
      products: state.products.map((item) =>
        item.id === productId
          ? { ...item, count: item.count > 0 ? item.count - 1 : item.count }
          : item
      ),
    };
  }),

  on(loadProducts, (state) => ({ ...state, loading: true })),

  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),

  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
