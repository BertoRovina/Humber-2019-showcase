import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-put-page',
  templateUrl: './put-page.component.html',
  styleUrls: ['./put-page.component.css']
})
export class PutPageComponent implements OnInit {

  objects = ['Category', 'Customer', 'Product'];

  selectedObject: string;

  constructor() { }

  ngOnInit() {
  }

}
