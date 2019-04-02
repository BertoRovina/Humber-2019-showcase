import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category';
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
export class CategoryService {
  categoriesUrl = 'https://hrovina-online-store.herokuapp.com/categories';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CategoriesService');
  }

  /** GET Categories from the server */
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        catchError(this.handleError('getCategories', []))
      );
  }

  /* GET Categories whose name contains search term */
  searchCategories(term: string): Observable<Category[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Category[]>(this.categoriesUrl, options)
      .pipe(
        catchError(this.handleError('searchCategories', []))
      );
  }

  /* GET Categories with the id sent */
  findCategoryById(id: string): Observable<Category> {

    return this.http.get<Category>(this.categoriesUrl + '/' + id)
      .pipe(
        catchError(this.handleError('findCategoryById', null))
      );
  }

  /** POST: add a new category to the database */
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl, category, httpOptions)
      .pipe(
        catchError(this.handleError('addCategory', category))
      );
  }

  deleteCategory(id: number) {
    return null;
  }

  updateCategory(id: number, updatedCategory: Category) {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Category>(this.categoriesUrl + '/' + id, updatedCategory, httpOptions)
      .pipe(
        catchError(this.handleError('updatedCategory', updatedCategory))
      );
  }


  searchCategoriesAdvanced(page: string, linesPerPage: string, orderBy: string, direction: string): Observable<Page> {
    // Add safe, URL encoded search parameter if there is a search term
    const options = page ?
      { params: new HttpParams().set('page', page)
          .set('linesPerPage', linesPerPage)
          .set('orderBy', orderBy)
          .set('direction', direction)} : {};

    return this.http
      .get<Page>(this.categoriesUrl + '/page', options)
      .pipe(
        catchError(this.handleError('searchCategories', null))
      );
  }
}

