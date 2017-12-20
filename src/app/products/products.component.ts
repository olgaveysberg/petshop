import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { PRODUCTCATEGORIES } from '../mock-productcategories';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  public products = PRODUCTS;
  public productcategories = PRODUCTCATEGORIES;
  selectedProduct: Product;
  selectedCategoryId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedCategoryId = id;
    if (id > 0){
      this.products = PRODUCTS.filter(x => x.categoryid == id);

      if (this.products.length == 0){
        this.selectedCategoryId = PRODUCTS.filter(x => x.id == id)[0].categoryid;
        this.products = PRODUCTS.filter(x => x.categoryid == this.selectedCategoryId);
      }
    }
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  onChange(selectedValue) {
    this.products = PRODUCTS;
    this.selectedCategoryId = selectedValue;
    if (selectedValue > 0)
      this.products = PRODUCTS.filter(x => x.categoryid == selectedValue);
  }

  
}
