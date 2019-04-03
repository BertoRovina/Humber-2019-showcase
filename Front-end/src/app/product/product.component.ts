import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {Page} from './page';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  providers: [ ProductService ],
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  product: Product;
  updatedProduct: Product;
  page: Page;
  editProduct: Product;
  // if true, search method is by Id
  searchMethod: boolean;
  directionOptions = ['Ascending', 'Descending'];
  orderByOptions = ['Name', 'Id'];
  location: string = location.pathname;


  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.setById(true);
  }

  setById(isById: boolean): void {
    if (isById) {
      this.searchMethod = true;
    } else {
      this.searchMethod = false;
    }
  }

  isById(): boolean {
    return this.searchMethod;
  }

  add(name: string): void {
    this.editProduct = undefined;
    name = name.trim();
    if (!name) { return; }

    // The server will generate the id for this new product
    const newProduct: Product = { name } as Product;
    this.productsService.addProduct(newProduct)
      .subscribe();
  }

  delete(id: string): void {
    this.productsService.deleteProduct(id)
      .subscribe();
  }

  search(searchTerm: string) {
    this.editProduct = undefined;
    if (searchTerm) {
      this.productsService.searchProducts(searchTerm)
        .subscribe(products => this.page = products);
    }
  }

  searchById(id: number) {
    this.products = null;
    this.page = null;
    this.editProduct = undefined;
    if (id) {
      this.productsService.findProductById(id)
        .subscribe(product => this.product = product);
    }
    console.log(this.products);
  }

  update(newName: string) {
    if (newName) {
      this.updatedProduct = this.product;
      this.updatedProduct.name = newName;
      this.productsService.updateProduct(this.product.id, this.updatedProduct)
        .subscribe();
    }
    this.product = null;
  }

  searchAdvanced(page: string, linesPerPage: string, orderBy: string, direction: string) {
    this.products = null;
    this.product = null;

    if (direction === 'Ascending') {
      direction = 'ASC';
    } else {
      direction = 'DESC';
    }

    if (orderBy === 'Name') {
      orderBy = 'name';
    } else {
      orderBy = 'id';
    }

    if (page && linesPerPage) {
      this.productsService.searchProductsAdvanced(page, linesPerPage, orderBy, direction)
        .subscribe(pageR => this.page = pageR);
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
