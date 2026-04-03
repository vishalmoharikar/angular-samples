import { Component, inject, OnInit } from '@angular/core';
import { CartItem } from '../../cart.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CartSelectors from '../../cart.selectors';
import * as CartActions from '../../cart.actions';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CartService } from '../../service/cartservice';

@Component({
  selector: 'app-cart',
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  private store = inject(Store);
  cartService = inject(CartService);


  items$ = this.store.select(CartSelectors.selectCartItems);
  total$ = this.store.select(CartSelectors.selectCartTotal);

  remove(id: number) {
    this.store.dispatch(CartActions.removeFromCart({ id }));
  }

  clear() {
    this.store.dispatch(CartActions.clearCart());
  }
}
