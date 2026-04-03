import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CartActions from '../../cart.actions';

@Component({
  selector: 'app-groceries',
  imports: [],
  templateUrl: './groceries.html',
  styleUrl: './groceries.scss',
})
export class Groceries {
  private store = inject(Store);

  addRice() {
    this.store.dispatch(CartActions.addToCart({
      item: { id: 3, name: 'Rice', price: 1000, quantity: 1 }
    }));
  }

  addMilk() {
    this.store.dispatch(CartActions.addToCart({
      item: { id: 4, name: 'Milk', price: 50, quantity: 1 }
    }));
  }
}
