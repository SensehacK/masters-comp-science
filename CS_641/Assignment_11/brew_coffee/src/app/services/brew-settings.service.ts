import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})

export class BrewSettingsService {

  private firstLaunch = true;
  private trackAppLaunches: number;
  private initLaunch = true;

  constructor(private storage: Storage) {
    console.log('Hello Sensehack');
    this.firstLaunch = true;

    // set a key/value
    this.storage.set('age', '24');

    storage.get('age').then((val) => {
      console.log('Your age is', val);
    });

    this.storage.get('isDefaultLaunch')
      .then((val) => {
        console.log('Value is : ', val);

        if (val !== null) {
          console.log('Default launch all the way');
          // No need to setup new parameters as this is just restoring the old settings.

        } else {
          console.log('Not Present value ? ');
          console.log('This is your first Launch');
          this.storage.set('isDefaultLaunch', 'true');
        }

      });



  }

  getFirstLaunch() {


    return this.firstLaunch;
  }

  setFirstLaunch() {
    this.firstLaunch = false;
  }

  initialize() {
    console.log('Hi in initialize brew settings');

    this.trackAppLaunches += 1;

    // console.log('First Launch present value: ', this.storage.get('firstLaunch'));
    // Or to get a key/value pair
    // this.storage.get('isDefaultLaunch')
    //   .then((val) => {
    //     console.log('Value is : ', val);

    //     if (val !== null) {
    //       console.log('Default launch all the way');
    //       // No need to setup new parameters as this is just restoring the old settings.

    //     } else {
    //       console.log('Not Present value ? ');
    //       console.log('This is your first Launch');
    //       this.storage.set('isDefaultLaunch', 'true');
    //     }

    //   });


  }


}
