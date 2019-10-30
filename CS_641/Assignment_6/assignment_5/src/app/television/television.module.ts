import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelevisionPage } from './television.page';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path: '',
    component: TelevisionPage
  },
  {
    path: ':id',
    component: ShowComponent
  },
  {
    path: 'shows',
    component: ShowComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelevisionPage, ShowComponent]
})
export class TelevisionPageModule { }
