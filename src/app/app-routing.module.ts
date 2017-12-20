import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { ProductsComponent }      from './products/products.component';
import { AboutComponent }      from './about/about.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { ContactComponent }      from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'detail/:categoryid/:id', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { 
  
}

