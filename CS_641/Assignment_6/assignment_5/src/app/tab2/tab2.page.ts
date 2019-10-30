import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertC: AlertController, public router: Router) { }



  buttonPress() {

    console.log('Button Pressed and calling func displayAlert');
    //Calling func
    this.displayAlert();

  }

  goToTelevision(){
    console.log('Hi in func Television');

    this.router.navigate(['television']);
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

  public moviesWatched = [
    { val: 'Godfather I', isChecked: true },
    { val: 'Matrix', isChecked: true },
    { val: 'Shawshank redemption', isChecked: true },
    { val: 'The dark knight', isChecked: true },
    { val: 'Joker', isChecked: false },
    { val: 'John wick', isChecked: false },
    { val: 'Lord of the rings ', isChecked: false }
  ];

}
