import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
// The modal's component of the previous chapter
import { ModalPage } from './modal.page';

@NgModule({
    declarations: [
        ModalPage
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    entryComponents: [
        ModalPage
    ],
    exports: [
        ModalPage
    ]
})

export class ModalPageModule { }