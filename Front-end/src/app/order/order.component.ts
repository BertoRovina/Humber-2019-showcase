import { Component, OnInit } from '@angular/core';
import {BankBilletPayment, CardPayment, CartItem, Order, OrderPost, Payment} from './order';
import {OrderService} from './order.service';
import {Customer} from '../customer/customer';
import {CustomerService} from '../customer/customer.service';
import {Product} from '../product/product';
import {ProductService} from '../product/product.service';
import {Address} from '../customer/address';
import {Category} from '../category/category';
import {CategoryService} from '../category/category.service';
import {Page} from '../product/page';

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
  selectedCustomer: Customer;
  selectedCustomerId: number;
  selectedAddress: Address;
  selectedAddressId: number;
  categories: Category[];
  selectedCategory: Category;
  selectedCategoryId: number;
  productsPage: Page;
  products: Product[];
  selectedProductId: number;
  selectedProduct: Product;
  cart: CartItem[];
  productQuantity: number;
  selectedPayment: string;
  installmentsNumber: number;
  expiryDate: string;

  constructor(private ordersService: OrderService,
              private customerService: CustomerService,
              private productService: ProductService,
              private categoryService: CategoryService
  ) { }

  ngOnInit() {
    if (this.location === '/post-page') {
      this.customerService.getCustomers()
        .subscribe(customers => this.customers = customers);
      this.cart = [];
    }
  }

  setSelectedCustomer(id: number): void {
    if (id) {
      this.customerService.findCustomerById(id)
        .subscribe(customer => this.selectedCustomer = customer);
    }
  }

  setSelectedAddress(id: number): void {
    if (id) {
      this.selectedAddress = this.selectedCustomer.addressList.find(address => address.id.toString() === id.toString());
    }
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  setSelectedCategory(id: number): void {
    if (id) {
      this.selectedCategory = this.categories.find(category => category.id.toString() === id.toString());
      this.getProducts();
    }
  }

  setSelectedProduct(id: number): void {
    if (id) {
      this.productService.findProductById(id)
        .subscribe(product => this.selectedProduct = product);
    }
  }

  setSelectedPayment(method: string): void {
    if (method) {
      this.selectedPayment = method;
    }
  }

  addToCart(): void {
    if (this.productQuantity && this.selectedProduct) {
      const newCartItem: CartItem = {
        quantity: this.productQuantity,
        product: this.selectedProduct
      };
      this.cart.push(newCartItem);
      console.log(newCartItem.product.name);
      this.selectedProduct = undefined;
      this.productQuantity = undefined;
    }
  }

  getProducts(): void {
    this.productService.searchProducts(this.selectedCategory.id.toString())
      .subscribe(products => this.productsPage = products);
  }

  add(): void {
    if (!this.selectedCustomer) { return; }

    if (this.selectedPayment === 'cardPayment') {
      const payment: CardPayment = {
        monthlyInstallments: this.installmentsNumber,
        type: this.selectedPayment
      };

      const newOrder: OrderPost = {
        client: this.selectedCustomer,
        address: this.selectedAddress,
        payment,
        cartItem: this.cart
      } as OrderPost;
      this.ordersService.addOrder(newOrder)
        .subscribe();
    }

    if (this.selectedPayment === 'bankBilletPayment') {
      const payment: BankBilletPayment = {
        expiryDate: this.expiryDate,
        type: this.selectedPayment
      };

      const newOrder: OrderPost = {
        client: this.selectedCustomer,
        address: this.selectedAddress,
        payment,
        cartItem: this.cart
      } as OrderPost;
      this.ordersService.addOrder(newOrder)
        .subscribe();
    }

    // The server will generate the id for this new order

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
