import { Component } from '@angular/core';
import { Iproduct } from '../shopping/shopping.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { selectProducts } from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  totalCartCount$: Observable<number>;

  constructor(private store: Store) {
    this.totalCartCount$ = this.store.select(selectProducts).pipe(
      map((res: Iproduct[]) => {
        return res.reduce((acc, item: Iproduct) => acc + item.count, 0);
      })
    );
  }

  ngOnInit(): void {}
}
