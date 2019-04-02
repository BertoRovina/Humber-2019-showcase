import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from './order';
import {catchError} from 'rxjs/internal/operators/catchError';
import {HandleError, HttpErrorHandler} from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'https://hrovina-online-store.herokuapp.com',
    'Access-Control-Allow-Methods' : '*'
  })
};

@Injectable()
export class OrderService {
  ordersUrl = 'https://hrovina-online-store.herokuapp.com/orders';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('OrdersService');
  }

  /** GET Orders from the server */

  /* GET Orders with the id sent */
  findOrderById(id: string): Observable<Order> {

    return this.http.get<Order>(this.ordersUrl + '/' + id)
      .pipe(
        catchError(this.handleError('findOrderById', null))
      );
  }

  /** POST: add a new order to the database */
  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, order, httpOptions)
      .pipe(
        catchError(this.handleError('addOrder', order))
      );
  }
}

