import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';
import {catchError} from 'rxjs/internal/operators/catchError';
import {HandleError, HttpErrorHandler} from '../http-error-handler.service';
import {Page} from './page';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'https://hrovina-online-store.herokuapp.com',
    'Access-Control-Allow-Methods' : '*'
  })
};

@Injectable()
export class ProductService {
  productsUrl = 'https://hrovina-online-store.herokuapp.com/products';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ProductsService');
  }

  /** GET Products from the server */

  /* GET Products whose name contains search term */
  searchProducts(categoryId: string): Observable<Page> {
    categoryId = categoryId.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = categoryId ?
      { params: new HttpParams().set('categories', categoryId) } : {};

    return this.http.get<Page>(this.productsUrl + '/', options)
      .pipe(
        catchError(this.handleError('searchProducts', null))
      );
  }

  /* GET Products with the id sent */
  findProductById(id: number): Observable<Product> {

    return this.http.get<Product>(this.productsUrl + '/' + id)
      .pipe(
        catchError(this.handleError('findProductById', null))
      );
  }

  /** POST: add a new product to the database */
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions)
      .pipe(
        catchError(this.handleError('addProduct', product))
      );
  }

  deleteProduct(id: string): Observable<{}> {
    return this.http.delete(this.productsUrl + '/' + id, httpOptions)
      .pipe(
        catchError(this.handleError('deleteProduct'))
      );
  }

  updateProduct(id: number, updatedProduct: Product) {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Product>(this.productsUrl + '/' + id, updatedProduct, httpOptions)
      .pipe(
        catchError(this.handleError('updatedProduct', updatedProduct))
      );
  }


  searchProductsAdvanced(page: string, linesPerPage: string, orderBy: string, direction: string): Observable<Page> {
    // Add safe, URL encoded search parameter if there is a search term
    const options = page ?
      { params: new HttpParams().set('page', page)
          .set('linesPerPage', linesPerPage)
          .set('orderBy', orderBy)
          .set('direction', direction)} : {};

    return this.http
      .get<Page>(this.productsUrl + '/page', options)
      .pipe(
        catchError(this.handleError('searchProducts', null))
      );
  }
}

