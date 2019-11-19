import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasCCComponent } from '../component/canvas-cc/canvas-cc.component';



@NgModule({
  declarations: [CanvasCCComponent],
  imports: [
    CommonModule
  ],
  exports: [CanvasCCComponent]
})
export class SharedModule { }
