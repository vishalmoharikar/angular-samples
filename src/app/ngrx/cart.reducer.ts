import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { CartItem } from './cart.model';

export interface CartState {
    items: CartItem[];
}

export const initialState: CartState = {
    items: []
};

export const cartReducer = createReducer(
    initialState,

    on(CartActions.addToCart, (state, { item }) => {
        const existing = state.items.find(i => i.id === item.id);

        if (existing) {
            return {
                ...state,
                items: state.items.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                )
            };
        }

        return {
            ...state,
            items: [...state.items, { ...item, quantity: 1 }]
        };
    }),

    on(CartActions.removeFromCart, (state, { id }) => ({
        ...state,
        items: state.items.filter(i => i.id !== id)
    })),

    on(CartActions.clearCart, state => ({
        ...state,
        items: []
    })),

    on(CartActions.updateQuantity, (state, { id, quantity }) => ({
        ...state,
        items: state.items.map(i =>
            i.id === id ? { ...i, quantity } : i
        )
    }))
);