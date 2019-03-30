import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category';
import {catchError} from 'rxjs/internal/operators/catchError';
import {HandleError, HttpErrorHandler} from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
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
  findCategoryById(id: string): Observable<Category[]> {

    return this.http.get<Category[]>(this.categoriesUrl + '/' + id)
      .pipe(
        catchError(this.handleError('findCategoryById', []))
      );
  }

  addCategory(newCategory: Category) {
    return null;
  }

  deleteCategory(id: number) {
    return null;
  }

  updateCategory(editCategory: Category) {
    return null;
  }


}

