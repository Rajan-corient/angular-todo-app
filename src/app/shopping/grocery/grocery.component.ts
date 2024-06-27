import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../shopping.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addProduct,
  removeProduct,
  loadProducts,
} from '../../store/actions/cart.action';
import {
  selectError,
  selectLoading,
  selectProducts,
} from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-grocery',
  standalone: false,
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss',
})
export class GroceryComponent implements OnInit {
  groceryList$: Observable<Iproduct[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store) {
    this.groceryList$ = this.store.select(selectProducts);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  addGrocery(grocery: Iproduct) {
    this.store.dispatch(addProduct({ product: grocery }));
  }

  removeGrocery(groceryId: number) {
    this.store.dispatch(removeProduct({ productId: groceryId }));
  }
}
