import { Component, OnInit } from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  providers: [ CategoryService ],
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  editCategory: Category;

  constructor(private categoriesService: CategoryService) { }

  ngOnInit() {
    // this.getCategories();
  }

  getCategories(): void {
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
      .subscribe(category => this.categories.push(category));
  }

  delete(category: Category): void {
    this.categories = this.categories.filter(h => h !== category);
    this.categoriesService.deleteCategory(category.id);
  }

  edit(category) {
    this.editCategory = category;
  }

  search(searchTerm: string) {
    this.editCategory = undefined;
    if (searchTerm) {
      this.categoriesService.searchCategories(searchTerm)
        .subscribe(categories => this.categories = categories);
    }
  }

  searchById(id: string) {
    this.editCategory = undefined;
    if (id) {
      this.categoriesService.findCategoryById(id)
        .subscribe(categories => this.categories = categories);
    }
    console.log(this.categories);
  }

  update() {
    if (this.editCategory) {
      this.categoriesService.updateCategory(this.editCategory)
        .subscribe(category => {
          // replace the hero in the heroes list with update from server
          const ix = category ? this.categories.findIndex(c => c.id === category.id) : -1;
          if (ix > -1) { this.categories[ix] = category; }
        });
      this.editCategory = undefined;
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
