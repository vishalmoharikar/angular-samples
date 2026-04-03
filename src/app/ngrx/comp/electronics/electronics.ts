import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import { CartService } from '../../service/cartservice';


@Component({
  selector: 'app-electronics',
  imports: [],
  templateUrl: './electronics.html',
  styleUrl: './electronics.scss',
})
export class Electronics {
  private store = inject(Store);

  private cartService = inject(CartService);

  addLaptop() {
    this.store.dispatch(CartActions.addToCart({
      item: { id: 1, name: 'Laptop', price: 50000, quantity: 1 }
    }));
  }

  addMobile() {
    this.store.dispatch(CartActions.addToCart({
      item: { id: 2, name: 'Mobile', price: 20000, quantity: 1 }
    }));
  }

  addItemBySignal() {
    this.cartService.addToCart({ id: 5, name: 'Luxary Product', price: 30000, quantity: 1 });
  }
}
