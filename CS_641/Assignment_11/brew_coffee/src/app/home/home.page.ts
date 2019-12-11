import { Component } from '@angular/core';
import { BrewSettingsService } from '../services/brew-settings.service';

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


  constructor(private brewSettings: BrewSettingsService) {
    // if (this.brewSettings.getFirstLaunch())
    // this.brewSettings.setFirstLaunch();

    // Calling Initialize function
    this.brewSettings.initialize();

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

    this.coffeeNative = this.coffeeSliderValue * 0.30;
    this.waterPeople = this.peopleCount * 150;
    this.totalCoffee = this.coffeeNative * this.waterPeople;

    console.log('Happy Brewing!', this.totalCoffee);
    console.log('Hello Sensehack!');
    console.log('Kautilya Save');
  }

}
