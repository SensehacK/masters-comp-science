import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertC: AlertController) { }



  buttonPress() {

    console.log('Button Pressed and calling func displayAlert');
    //Calling func
    this.displayAlert();

  }

  async displayAlert() {
    const alert = await this.alertC.create({
      header: 'Sensehack',
      subHeader: 'Kautilya',
      message: 'This is a test Alert',
      buttons: ['Yo'],
    });

    await alert.present();
  }

}
