import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  categorySelectedValue: number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const categoryid = +this.route.snapshot.paramMap.get('categoryid');
    this.product = PRODUCTS.filter(x => x.id == id)[0];
    this.categorySelectedValue = categoryid;
  }

  goBack(){
    location.href = `/products/${this.categorySelectedValue}`;
    
  }
}
