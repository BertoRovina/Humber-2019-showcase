import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

class  Category {

    id: number;
    name: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    categoriesObservable: Observable<Category[]>;
    constructor(private  httpClient: HttpClient) {}

  ngOnInit() {
      this.categoriesObservable = this.httpClient

          .get<Category[]>('https://hrovina-online-store.herokuapp.com/categories');
  }

}
