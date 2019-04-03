import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './customer';
import {catchError} from 'rxjs/internal/operators/catchError';
import {HandleError, HttpErrorHandler} from '../http-error-handler.service';
import {Page} from './page';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class CustomerService {
  customersUrl = 'https://hrovina-online-store.herokuapp.com/clients';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CustomersService');
  }

  /** GET Customers from the server */
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
      .pipe(
        catchError(this.handleError('getCustomers', []))
      );
  }

  /* GET Customers whose name contains search term */
  searchCustomers(term: string): Observable<Customer[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Customer[]>(this.customersUrl, options)
      .pipe(
        catchError(this.handleError('searchCustomers', []))
      );
  }

  /* GET Customers with the id sent */
  findCustomerById(id: number): Observable<Customer> {

    return this.http.get<Customer>(this.customersUrl + '/' + id)
      .pipe(
        catchError(this.handleError('findCustomerById', null))
      );
  }

  addCustomer(newCustomer: Customer) {
    return null;
  }

  deleteCustomer(id: number) {
    return null;
  }

  updateCustomer(editCustomer: Customer) {
    return null;
  }


  searchCustomersAdvanced(page: string, linesPerPage: string, orderBy: string, direction: string): Observable<Page> {
    // Add safe, URL encoded search parameter if there is a search term
    const options = page ?
      { params: new HttpParams().set('page', page)
          .set('linesPerPage', linesPerPage)
          .set('orderBy', orderBy)
          .set('direction', direction)} : {};

    return this.http
      .get<Page>(this.customersUrl + '/page', options)
      .pipe(
        catchError(this.handleError('searchCustomers', null))
      );
  }
}

