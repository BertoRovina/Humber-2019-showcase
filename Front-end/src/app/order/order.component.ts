import { Component, OnInit } from '@angular/core';
import {Order} from './order';
import {OrderService} from './order.service';
import {Customer} from '../customer/customer';
import {CustomerService} from '../customer/customer.service';
import {Product} from '../product/product';
import {ProductService} from '../product/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  providers: [ OrderService ],
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order;
  location: string = location.pathname;
  customers: Customer[];
  products: Product[];
  selectedCustomer: Customer;

  constructor(private ordersService: OrderService,
              private customerService: CustomerService,
              private productService: ProductService
  ) { }

  ngOnInit() {
    if (this.location === '/post-page') {
      this.customerService.getCustomers()
        .subscribe(customers => this.customers = customers);

      this.productService.getProducts()
        .subscribe(products => this.products = products);
    }
  }

  // setSelectedCustomer(): void {
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    // The server will generate the id for this new order
    const newOrder: Order = {  } as Order;
    this.ordersService.addOrder(newOrder)
      .subscribe();
  }

  searchById(id: string) {
    if (id) {
      this.ordersService.findOrderById(id)
        .subscribe(order => this.order = order);
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
