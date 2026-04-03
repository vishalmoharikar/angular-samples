import { createAction, props } from '@ngrx/store';
import { CartItem } from './cart.model';

export const addToCart = createAction(
    '[Cart] Add Item',
    props<{ item: CartItem }>()
);

export const addToCartSuccess = createAction(
    '[Cart] Add Item Success',
    props<{ item: CartItem }>()
);

export const addToCartFailure = createAction(
    '[Cart] Add Item Failure'
);
export const removeFromCart = createAction(
    '[Cart] Remove Item',
    props<{ id: number }>()
);

export const clearCart = createAction('[Cart] Clear Cart');

export const updateQuantity = createAction(
    '[Cart] Update Quantity',
    props<{ id: number; quantity: number }>()
);