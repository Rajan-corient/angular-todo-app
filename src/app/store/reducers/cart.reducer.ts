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
    const existingProduct = state.products.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        ),
      };
    } else {
      return {
        ...state,
        products: state.products.map((item) => ({ ...item, count: 1 })),
      };
    }
  }),
  on(removeProduct, (state, { productId }) => {
    const existingProduct = state.products.find(
      (item) => item.id === productId
    );
    if (existingProduct && existingProduct.count > 1) {
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === productId ? { ...item, count: item.count - 1 } : item
        ),
      };
    } else {
      return {
        ...state,
        products: state.products.filter((item) => item.id !== productId),
      };
    }
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
