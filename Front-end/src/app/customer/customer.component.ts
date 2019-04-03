import {Component, OnInit} from '@angular/core';
import {Customer} from './customer';
import {Page} from './page';
import {CustomerService} from './customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  customer: Customer;
  page: Page;
  editCustomer: Customer;
  // if true, search method is by Id
  searchMethod: boolean;
  directionOptions = ['Ascending', 'Descending'];
  orderByOptions = ['Name', 'Id', 'Email'];


  constructor(private customersService: CustomerService) { }

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

  getCustomers(): void {
    this.page = null;
    this.customer = null;
    this.customersService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  add(name: string): void {
    this.editCustomer = undefined;
    name = name.trim();
    if (!name) { return; }

    // The server will generate the id for this new customer
    const newCustomer: Customer = { name } as Customer;
    this.customersService.addCustomer(newCustomer)
      .subscribe(customer => this.customers.push(customer));
  }

  delete(customer: Customer): void {
    this.customers = this.customers.filter(h => h !== customer);
    this.customersService.deleteCustomer(customer.id);
  }

  edit(customer) {
    this.editCustomer = customer;
  }

  search(searchTerm: string) {
    this.editCustomer = undefined;
    if (searchTerm) {
      this.customersService.searchCustomers(searchTerm)
        .subscribe(customers => this.customers = customers);
    }
  }

  searchById(id: number) {
    this.customers = null;
    this.page = null;
    this.editCustomer = undefined;
    if (id) {
      this.customersService.findCustomerById(id)
        .subscribe(customer => this.customer = customer);
    }
    console.log(this.customers);
  }

  update() {
    if (this.editCustomer) {
      this.customersService.updateCustomer(this.editCustomer)
        .subscribe(customer => {
          // replace the hero in the heroes list with update from server
          const ix = customer ? this.customers.findIndex(c => c.id === customer.id) : -1;
          if (ix > -1) { this.customers[ix] = customer; }
        });
      this.editCustomer = undefined;
    }
  }

  searchAdvanced(page: string, linesPerPage: string, orderBy: string, direction: string) {
    this.customers = null;
    this.customer = null;

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
      this.customersService.searchCustomersAdvanced(page, linesPerPage, orderBy, direction)
        .subscribe(pageR => this.page = pageR);
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
