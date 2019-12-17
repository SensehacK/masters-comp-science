import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoffeeViewPageRoutingModule } from './coffee-view-routing.module';

import { CoffeeViewPage } from './coffee-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoffeeViewPageRoutingModule
  ],
  declarations: [CoffeeViewPage]
})
export class CoffeeViewPageModule {}
