import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-page',
  templateUrl: './get-page.component.html',
  styleUrls: ['./get-page.component.css']
})
export class GetPageComponent implements OnInit {

  objects = ['Category', 'Customer',
    'Order', 'Product'];

  selectedObject: string;

  constructor() { }

  ngOnInit() {
  }

}
