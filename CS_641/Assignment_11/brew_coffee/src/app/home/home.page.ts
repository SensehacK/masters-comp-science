import { Component } from '@angular/core';

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


  constructor() { }

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



}
