import { ApplicationConfig } from '@angular/core';
import { PromiseComp } from './promise-comp/promise-comp';
import { provideRouter, Routes } from '@angular/router';
import { Observables } from './observables/observables';
import { FromEvent } from './observables/comp/from-event/from-event';
import { Interval } from './observables/comp/interval/interval';
import { Container } from './users/container/container';
import { Cart } from './ngrx/comp/cart/cart';
import { Shopping } from './ngrx/shopping/shopping';

export const routes: Routes = [
    { path: 'components', component: Container },
    { path: 'ngRxStore', component: Shopping },
    { path: 'promise', component: PromiseComp },
    {
        path: 'observable', component: Observables, children: [
            { path: 'from-event', component: FromEvent },
            { path: 'interval', component: Interval },
            // {path: 'custom',component: Custom}
        ]
    },
    { path: '**', redirectTo: 'promise', pathMatch: 'full' },
    // Default path
];

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes)
    ]
};
