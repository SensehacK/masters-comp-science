import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Storage } from '@ionic/storage';
import { CoffeeSync } from '../model/brew_coffee';


@Injectable({
  providedIn: 'root'
})

export class BrewSettingsService {

  private firstLaunch = true;
  private trackAppLaunches: number;
  private coffeeData: {};


  private appSettingsSync: {
    gitCodeURL: '',
    appTodayMsg: '',
    greetMsg: '',
  };

  // Variables
  urlBrewCoffee = 'https://my-json-server.typicode.com/sensehack/demo/brew-coffee';

  private coffeeAppInterface: CoffeeSync;


  constructor(
    private storage: Storage,
    private http: HttpClient) {
    console.log('Hello Sensehack');
    console.log('Managing states are tricky when the software product grows exponentially. Design Architecture Matters ~ Kautilya.');

    // // set a key/value
    // this.storage.set('age', '24');

    // storage.get('age').then((val) => {
    //   console.log('Your age is', val);
    // });

    this.storage.get('isDefaultLaunch')
      .then((val) => {
        console.log('Value is : ', val);

        if (val !== null) {
          console.log('Default launch all the way');
          this.setDefaultLaunch();
          // No need to setup new parameters as this is just restoring the old settings.
        } else {
          console.log('Not Present value ? ');
          this.setFirstLaunch();
        }
      });

  }

  // Returns a boolean state to easy reference to avoid promises
  // | Maybe I'll keep consistent UX for data service to return promises as standard.
  getFirstLaunch() {
    return this.firstLaunch;
  }

  setDefaultLaunch() {
    // TODO:
    // Restore last variables like Number of people and coffee settings.

    this.firstLaunch = false;
    console.log('Default Launch code setup.');
    console.log('Coffee with Work - Synergy');
    console.log('https://tinyurl.com/sensk | https://sensehack.github.io');


  }

  setFirstLaunch() {

    // TODO:
    // Show welcome help screen code or parameter to invoke the view controller for first launch settings.
    console.log('This is your first Launch');
    this.firstLaunch = true;
    this.storage.set('isDefaultLaunch', 'true');
    this.storage.set('trackAppLaunches', 0);

  }

  initialize() {

    console.log('Hi in initialize brew settings');
    // TODO:
    //  Manage states efficiently & refactor as much as possible.


    // Calling store Data Model
    this.storeDataModel();

    this.storage.get('trackAppLaunches').then((val) => {
      console.log('Your App Launch is', val);
      this.trackAppLaunches = val + 1;
      this.storage.set('trackAppLaunches', this.trackAppLaunches);
    });

  }

  storeDataModel() {
    // Calling Angular Http request object
    this.retrieveBrewCoffeeSettings()
      .subscribe(
        data => {
          console.log(data);
          console.log('Printing data', data);
          this.coffeeAppInterface = data;
          this.storage.set('appDataSync', true);
          // debugger;

        },
        err => {
          console.log('Error', err);
          alert('Having trouble getting the online settings');
        }
      );
  }

  retrieveBrewCoffeeSettings() {
    return this.http.get<CoffeeSync>(this.urlBrewCoffee);
  }


  getAppSettings() {

    return new Promise((resolve, reject) => {
      this.storage.get('appDataSync').then((val) => {
        if (val) {
          console.log('App has got the data from sync', val);
          resolve(this.coffeeAppInterface);
        } else {
          console.log('App has not got the data from sync', val);
          // Calling initialize again()
          this.storeDataModel();
          reject('App data not sync yet');
          this.getAppSettings();
        }
      });
    });
  }



  // Returns promise.
  getTrackAppLaunch() {
    return this.storage.get('trackAppLaunches');
  }


  reset() {

    // TODO:
    // Add Modal controller for asking "Are you Sure ?!" || Currently working on just Alert.

    this.storage.clear();
    alert('Settings Cleared');

  }


  getCoffeeObj() {
    return this.coffeeData;
  }

  setCoffeeObj(data: {}) {
    this.coffeeData = data;
  }


}
