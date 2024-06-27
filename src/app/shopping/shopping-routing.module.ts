import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { GroceryComponent } from './grocery/grocery.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { HomeFurnitureComponent } from './home-furniture/home-furniture.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
  },
  {
    path: 'grocery',
    component: GroceryComponent,
  },  {
    path: 'fashion',
    component: FashionComponent,
  },  
  {
    path: 'electronics',
    component: ElectronicComponent,
  },  
  {
    path: 'home-furniture',
    component: HomeFurnitureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingRoutingModule {}
