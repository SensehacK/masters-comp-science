import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modal: ModalController) { }


  onClick() {
    console.log('Hello Sensehack!');

  }

  async onModal() {

    const modal = await this.modal.create({
      component: ModalPage
    });

    return await modal.present();



  }
}
