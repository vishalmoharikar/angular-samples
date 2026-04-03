import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {// The private state (The "Store")
  private cartItems = signal<any[]>([]);

  // Publicly available signals (The "Selectors")
  readonly items = this.cartItems.asReadonly();
  readonly count = computed(() => {
    var count = 0;
    this.cartItems().forEach(item => {
      count += item.quantity;
    });
    return count;
  });
  readonly totalLuxury = computed(() => {
    var total = 0;
    this.cartItems().forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  });

  // Methods to update state (The "Actions/Reducers")
  addToCart(product: any) {
    const existing = this.cartItems().find(i => i.id === product.id);

    if (existing) {
      this.cartItems.update(items => items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      this.cartItems.update(items => [...items, product]);
    }
  }

}
