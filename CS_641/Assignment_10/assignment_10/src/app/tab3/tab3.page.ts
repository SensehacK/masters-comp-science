import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  constructor(private vibration: Vibration,
    private speech: TextToSpeech) { }


  vibratePhone() {
    console.log('Hello Sensehack!');
    alert('Hello');
    this.vibration.vibrate(1000);
  }

  speakPhone() {
    console.log('In speak phone');
    this.speech.speak('Hello Kautilya')
      .then(() => {
        console.log('Worked fine');
      })
      .catch(() => {
        console.log('Catch error');
      });
  }

}
