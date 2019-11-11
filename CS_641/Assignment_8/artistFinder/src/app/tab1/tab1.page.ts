import { Component } from '@angular/core';
import { AudioDBService } from '../services/audio-db.service';
import { Artist } from 'src/model/audioDB/artistDB';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  // Property Binding for easy communication with View
  artistName = '';
  artistTitle = '';
  songLyrics = 'NA';
  artistD = []; // Array of Artist Object
  artistData: Artist; // Data Model of Artist

  constructor(private audioService: AudioDBService) {

    // Calling Init
    this.init();

  }


  init() {
    // Dummy data
    // this.artistName = 'Kautilya';
    this.artistTitle = 'Kautilya';
  }

  onClick() {
    console.log('Hi Sensehack Dev env');
    this.artistName = this.artistName ? this.artistName : 'Kautilya';

    this.audioService.getArtistInfo(this.artistName)
      .subscribe((data) => {
        console.log(data);
        data.artists.forEach(artist => {
          console.log('in For each array');
          this.artistData = artist;
          this.artistD.push(this.artistData);
          this.artistTitle = this.artistData.strArtist ? this.artistData.strArtist : this.artistName;
          console.log(artist.strArtist);
          console.log(artist.intBornYear);
          console.log(this.artistData.strBiographyEN);
        });

      });

  }

}
