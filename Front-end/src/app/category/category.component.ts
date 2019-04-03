import { Component, OnInit } from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';
import {Page} from './page';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  providers: [ CategoryService ],
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  category: Category;
  updatedCategory: Category;
  page: Page;
  editCategory: Category;
  // if true, search method is by Id
  searchMethod: boolean;
  directionOptions = ['Ascending', 'Descending'];
  orderByOptions = ['Name', 'Id'];
  location: string = location.pathname;


  constructor(private categoriesService: CategoryService) { }

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

  getCategories(): void {
    this.page = null;
    this.category = null;
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  add(name: string): void {
    this.editCategory = undefined;
    name = name.trim();
    if (!name) { return; }

    // The server will generate the id for this new category
    const newCategory: Category = { name } as Category;
    this.categoriesService.addCategory(newCategory)
      .subscribe();
  }

  delete(id: string): void {
    this.categoriesService.deleteCategory(id)
      .subscribe();
  }

  search(searchTerm: string) {
    this.editCategory = undefined;
    if (searchTerm) {
      this.categoriesService.searchCategories(searchTerm)
        .subscribe(categories => this.categories = categories);
    }
  }

  searchById(id: string) {
    this.categories = null;
    this.page = null;
    this.editCategory = undefined;
    if (id) {
      this.categoriesService.findCategoryById(id)
        .subscribe(category => this.category = category);
    }
    console.log(this.categories);
  }

  update(newName: string) {
    if (newName) {
      this.updatedCategory = this.category;
      this.updatedCategory.name = newName;
      this.categoriesService.updateCategory(this.category.id, this.updatedCategory)
        .subscribe();
    }
    this.category = null;
  }

  searchAdvanced(page: string, linesPerPage: string, orderBy: string, direction: string) {
    this.categories = null;
    this.category = null;

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
      this.categoriesService.searchCategoriesAdvanced(page, linesPerPage, orderBy, direction)
        .subscribe(pageR => this.page = pageR);
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
