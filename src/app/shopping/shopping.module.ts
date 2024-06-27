import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping/shopping.component';
import { GroceryComponent } from './grocery/grocery.component';


@NgModule({
  declarations: [
    ShoppingComponent,
    GroceryComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
