import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeeViewPage } from './coffee-view.page';

const routes: Routes = [
  {
    path: '',
    component: CoffeeViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoffeeViewPageRoutingModule {}
