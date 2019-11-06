import { Component } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string;

  constructor(private modal: ModalController,
    private actionSheetController: ActionSheetController) { }


  onClick() {
    console.log('Hello Sensehack!');

  }

  async onModal() {

    const modal = await this.modal.create({
      component: ModalPage,
      componentProps: {
        data: this.name,
      }
    });

    await modal.present();

    modal.onDidDismiss()
      .then(resp => {
        alert(JSON.stringify(resp.data));
      });


  }

  async actionSheet() {
    console.log('Hello Actionsheet');

    const actionSheet = this.actionSheetController.create({
      header: 'Websites',
      buttons: [{
        text: 'Reddit',
        role: 'open',
        handler: () => {
          console.log('Open clicked');

        }
      }, {
        text: 'Spotify',
        role: 'music',
        handler: () => {
          console.log('Play Stairway to heaven');

        }
      }, {
        text: 'Dash',
        role: 'dash',
        handler: () => {
          console.log('Download Dash API');
        }
      }]
    });

    (await actionSheet).present();
  }




}
