import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
} from '../actions/cart.action';
import { ProductService } from '../../shopping/product.service';
import { Iproduct } from 'src/app/shopping/shopping.model';

@Injectable()
export class CartEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((res: Iproduct[]) => loadProductsSuccess({ products: res })),
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
