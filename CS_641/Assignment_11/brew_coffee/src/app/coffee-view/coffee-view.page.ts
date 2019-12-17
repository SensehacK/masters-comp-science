import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BrewSettingsService } from '../services/brew-settings.service';

@Component({
  selector: 'app-coffee-view',
  templateUrl: './coffee-view.page.html',
  styleUrls: ['./coffee-view.page.scss'],
})
export class CoffeeViewPage implements OnInit {

  coffeeData: {};
  constructor(
    private brewSettings: BrewSettingsService,
    private route: ActivatedRoute
  ) {
    this.coffeeData = {};
  }

  ngOnInit() {
    this.coffeeData = this.route.snapshot.paramMap.get('id');

    console.log('The data parsed from main screen', this.coffeeData);

  }


  openApp(appName: string) {

    if (appName === 'Starbucks') {
      // TODO:
      console.log('Launch Starbucks');
    } else {
      alert('Can\'t find the app on your phone');
    }

  }

}
