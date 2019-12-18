import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CoffeeSync } from '../model/brew_coffee'

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

  private coffeeAppInterface: CoffeeSync;


  constructor(private storage: Storage) {
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

    this.storage.get('trackAppLaunches').then((val) => {
      console.log('Your App Launch is', val);
      this.trackAppLaunches = val + 1;
      this.storage.set('trackAppLaunches', this.trackAppLaunches);
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
