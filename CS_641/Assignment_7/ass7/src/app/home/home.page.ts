import { Component } from '@angular/core';
import { ModalController, ActionSheetController, LoadingController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string;

  // Debug stack - adding console.log statements even though I could have used the debugger.
  // Its just I prefer Firefox over Safari or Chrome debugging and don't like debugging unless I'm in a spaghetti code

  constructor(private modal: ModalController,
    private actionSheetController: ActionSheetController,
    private router: Router,
    private loadingController: LoadingController) { }


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


  async onClickNav() {

    // Trying out loading icon
    console.log('loading start');

    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();
    console.log('loading ended');
    const didDismiss = await loading.onDidDismiss();
    // if (didDismiss) {
    // Router navigation
    await this.router.navigateByUrl('/movie-list');
    // }






  }




}
