import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category';
import {catchError} from 'rxjs/internal/operators/catchError';

@Injectable()
export class CategoryService {
  categoriesUrl = 'https://hrovina-online-store.herokuapp.com/categories';  // URL to web api
  // private handleError: HandleError;

  constructor(
    private http: HttpClient) { }

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

  /* GET Categories whose name contains search term */
  findCategoryById(id: string): Observable<Category[]> {

    // Add safe, URL encoded search parameter if there is a search term
    const options = id ?
      { params: new HttpParams().set('id', id) } : {};

    return this.http.get<Category[]>(this.categoriesUrl, options)
      .pipe(
        catchError(this.handleError('searchCategories', []))
      );
  }

  private handleError(categories: string, anies: any[]) {
    return undefined;
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

