import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  objects = ['Category', 'Customer',
    'Order', 'Product'];

  selectedObject: string;

  constructor() { }

  ngOnInit() {
  }

}
