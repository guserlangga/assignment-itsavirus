import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BagComponent } from './components/bag/bag.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product-detail', component: ProductDetailsComponent },
  { path: 'bag', component: BagComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
