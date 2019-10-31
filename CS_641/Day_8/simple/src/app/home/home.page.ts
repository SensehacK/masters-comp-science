import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonSlides) slides: IonSlides;

  isEnabled = true;
  constructor() { }

  goToSlide() {
    this.slides.slideNext();
    this.slides.isEnd().then(
      (e) => {
        console.log('At the end', e);
        this.isEnabled = !e;
      });

  }

}
