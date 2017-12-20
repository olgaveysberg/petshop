import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { CATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories = CATEGORIES;
  selectedCategory: Category;

  constructor() { }

  ngOnInit() {
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }
}
