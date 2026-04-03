import { Component } from '@angular/core';
import { Cart } from '../comp/cart/cart';
import { Groceries } from '../comp/groceries/groceries';
import { Electronics } from '../comp/electronics/electronics';

@Component({
  selector: 'app-shopping',
  imports: [Electronics, Groceries, Cart  ],
  templateUrl: './shopping.html',
  styleUrl: './shopping.scss',
})
export class Shopping {}
