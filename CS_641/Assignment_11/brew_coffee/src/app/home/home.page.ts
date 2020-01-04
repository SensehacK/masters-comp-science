import { Messages } from './../model/brew_coffee';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrewSettingsService } from '../services/brew-settings.service';
import { CoffeeSync } from '../model/brew_coffee';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Variables declared
  coffeeIntensity = [
    'I\'m a baby',
    'Still drinks milk!',
    'DeCaf',
    'Elementary',
    '1:1 Coffee Milk',
    'School',
    'I was born ready',
    'High School',
    'Christmas break',
    'Graduation',
    'Post Graduation',
    'Stress',
    'Hybrid Web Dev',
    'Coding',
    'CEO Material',
    'Black coffee',
    'Alcohol + Hangover',
    'Drugs + Caffeine',
    'All-nighter'
  ];

  peopleCount = 0;
  coffeeSliderValue = 0;
  coffeeNative = 0;
  waterPeople = 0;
  totalCoffee = 0;

  coffeeAppData;
  dailyMsg = 'Hello Mr.Robot!';


  constructor(
    private brewSettings: BrewSettingsService,
    private router: Router,
    private storage: Storage,
  ) {

    // if (this.brewSettings.getFirstLaunch())
    // this.brewSettings.setFirstLaunch();

    // Calling Initialize function
    this.brewSettings.initialize();

    // const coffeeAppData =
    this.brewSettings.getAppSettings()
      .then((data) => {
        console.log('Data promise ', data);


        if (!(typeof (data) === 'undefined')) {
          this.coffeeAppData = data;
          console.log('Printing various settings *******************', this.coffeeAppData);
          this.dailyMsg = this.coffeeAppData.appMisc.greetMsg ? this.coffeeAppData.appMisc.greetMsg : this.dailyMsg;
          alert(this.dailyMsg);
        }
      })
      .catch((err) => {
        alert(this.dailyMsg);
      });

    console.log(this.dailyMsg);
    // alert(this.dailyMsg);



  }

  subtract() {
    this.peopleCount -= 1;
  }

  add() {
    this.peopleCount += 1;
  }

  handleCoffeeIntensityRange(value: any) {
    console.log('Hi hello');
    console.log('The value returned is : ', value);
  }

  calculate() {
    console.log('The values are given as ', this.coffeeIntensity[this.coffeeSliderValue], this.peopleCount);

    console.log('Great Choice of coffee');

    // this.coffeeNative = this.coffeeSliderValue * 0.30;
    // this.waterPeople = this.peopleCount * 150;
    // this.totalCoffee = this.coffeeNative * this.waterPeople;


    const coffeeSliderFormula = (typeof (this.coffeeAppData) !== 'undefined')
      ? this.coffeeAppData.appSettings.coffee_slider_val : 0.30;
    const waterUnitFormula = (typeof (this.coffeeAppData) !== 'undefined')
      ? this.coffeeAppData.appSettings.coffee_water_val : 150;




    this.coffeeNative = this.coffeeSliderValue * coffeeSliderFormula;
    this.waterPeople = this.peopleCount * waterUnitFormula;
    this.totalCoffee = this.coffeeNative * this.waterPeople;


    const coffeeData = {
      coffeeNative: this.coffeeNative,
      waterPeople: this.waterPeople,
      totalCoffee: this.totalCoffee
    };



    console.log('Happy Brewing!', this.totalCoffee, coffeeData.totalCoffee);
    console.log('Hello Sensehack!');
    console.log('Kautilya Save');
    console.log('Data printing:', coffeeData);
    this.brewSettings.setCoffeeObj(coffeeData);

    this.router.navigate(['coffee-view']);


  }

  openSettings() {
    console.log('Hello Sensehack!');
    this.router.navigate(['settings']);
  }

}
