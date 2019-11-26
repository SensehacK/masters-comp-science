import { Component } from '@angular/core';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  appName = '';



  constructor(private appLauncher: AppLauncher, private platform: Platform) { }



  launchApp() {
    const options: AppLauncherOptions = {
    };

    if (this.platform.is('ios')) {
      options.uri = 'spotify://';
    } else {
      options.packageName = 'com.facebook.katana';
    }

    this.appLauncher.canLaunch(options)
      .then((canLaunch: boolean) => {
        console.log('Spotify is available');
        this.appLauncher.launch({ uri: 'spotify://' });
      })
      .catch((error: any) => console.error('Facebook is not available'));

  }
}
