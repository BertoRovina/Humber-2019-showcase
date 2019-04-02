import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-del-page',
  templateUrl: './del-page.component.html',
  styleUrls: ['./del-page.component.css']
})
export class DelPageComponent implements OnInit {

  objects = ['Category', 'Customer',
    'Order', 'Product'];

  selectedObject: string;

  constructor() { }

  ngOnInit() {
  }

}
