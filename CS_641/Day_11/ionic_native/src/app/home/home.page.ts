import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private vibration: Vibration,
    private speech: TextToSpeech) { }


  vibratePhone() {
    console.log('Hello Sensehack!');
    alert('Hello');
    this.vibration.vibrate(1000);
  }

  speakPhone() {
    console.log('In speak phone');
    this.speech.speak('Dev App')
      .then(() => {
        console.log('Worked fine');
      })
      .catch(() => {
        console.log('Catch error');
      });
  }



}
