import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BrewSettingsService } from '../services/brew-settings.service';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-coffee-view',
  templateUrl: './coffee-view.page.html',
  styleUrls: ['./coffee-view.page.scss'],
})
export class CoffeeViewPage implements OnInit {

  coffeeData: {} = {
    coffeeNative: 0,
    waterPeople: 0,
    totalCoffee: 0
  };
  appName = '';
  appDisplayMsg = '';
  errorMsg = 'Please submit a bug on this link';
  gitCodeLink = "https://github.com/SensehacK/Masters_Comp_Science";

  constructor(
    private brewSettings: BrewSettingsService,
    private route: ActivatedRoute,
    private appLauncher: AppLauncher,
    private platform: Platform,
  ) {
    // this.coffeeData = {};
  }

  ngOnInit() {

    // Getting data off service class
    this.coffeeData = this.brewSettings.getCoffeeObj();
    // this.coffeeData = this.route.snapshot.paramMap.get('id');
    // debugger;
    if (typeof (this.coffeeData) === 'undefined' || this.coffeeData === 'null') {
      console.log('Hi in coffeedata condition', this.appDisplayMsg);

      this.appDisplayMsg = 'Error in parsing coffee data';

    }
    console.log('The data parsed from main screen', this.coffeeData);
    console.log(this.coffeeData);

  }



  openApp(appName: string) {

    this.appName = appName.toLowerCase();

    if (this.appName === 'starbucks') {
      // TODO:
      console.log('Launch Starbucks');
    } else {
      alert('App ' + this.appName + ' not found on your device!');
    }

    let bundleIdentifier = '';
    switch (this.appName) {
      case 'starbucks':
        bundleIdentifier = 'com.starbucks.mobilecard';
        break;
      case 'dunkin':
        bundleIdentifier = 'com.dunkinbrands.otgo';
        break;
      case 'mcdonalds':
        bundleIdentifier = 'com.mcdonalds.mobileapp';
        break;

      default:
        // https://play.google.com/store/search?q=appName
        bundleIdentifier = 'http://play.google.com?id=' + this.appName;
    }

    // Old code
    const options: AppLauncherOptions = {
    };

    if (this.platform.is('ios')) {
      options.uri = appName + '://';
    } else {
      options.packageName = 'com.' + appName + '';
    }

    console.log('Data parsing on the browser', bundleIdentifier);
    console.log('Printing options', options);


    this.appLauncher.canLaunch(options)
      .then((canLaunch: boolean) => {
        // console.log('Spotify is available');

        let variable = '';
        if (this.platform.is('ios')) {
          variable = this.appName + '://';
        } else if (this.platform.is('android')) {
          // Android
          variable = bundleIdentifier;
        }
        console.log(variable);

        // this.appLauncher.launch({ uri: 'spotify://' });
        this.appLauncher.launch({ uri: variable });
      })
      .catch((error: any) => {
        console.error(this.appName, ' is not available');
        this.appDisplayMsg = this.appName + ' is not available';
      });
  }

  // */

}
