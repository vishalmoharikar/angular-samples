import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CartActions from './cart.actions';
import { delay, map, switchMap, of } from 'rxjs';

@Injectable()
export class CartEffects {

    private actions$ = inject(Actions);

    addToCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.addToCart),
            switchMap(({ item }) =>
                of(item).pipe(
                    delay(1000), // simulate API delay
                    map(() => {
                        if (item.name === 'Mobile') {
                            return CartActions.addToCartFailure();
                        }
                        return CartActions.addToCartSuccess({ item });
                    })
                )
            )
        )
    );
}