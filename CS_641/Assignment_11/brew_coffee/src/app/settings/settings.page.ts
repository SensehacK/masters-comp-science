import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  gitCodeLink = 'https://github.com/SensehacK';
  linkedInLink = 'https://in.linkedin.com/in/kautilyasave';

  constructor() { }

  ngOnInit() {
  }

}
