import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { CartPageComponent } from '../cart-page/cart-page.component';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  cart!: Cart;
  cartItem!: CartItem;
  constructor(private cartService: CartService, private fs:FoodService ) { 
    this.setCart();
  }

  ngOnInit(): void {
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }
}
