import { Component } from '@angular/core';
import { AudioDBService } from '../services/audio-db.service';
import { Artist } from 'src/model/audioDB/artistDB';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  artistName = '';
  artistSongName = '';
  songLyrics = 'NA';
  artistD = [];
  artistData: Artist;

  constructor(private audioService: AudioDBService) {

    // Calling Init
    this.init();
  }


  init() {
    this.artistName = 'Eminem';
    this.artistSongName = 'Role Model';

  }

  onClick() {
    console.log('Hi Sensehack Dev env');

    this.audioService.getArtistInfo(this.artistName)
      .subscribe((data) => {
        console.log(data);
        console.log(typeof (data));

        console.log(data.artists);
        console.log(typeof (data.artists));
        // this.artistD = data.artists;

        console.log(this.artistD);
        console.log(typeof (this.artistD));

        data.artists.forEach(artist => {
          console.log('in For each array');
          this.artistData = artist;
          this.artistD.push(this.artistData);

          console.log(artist.strArtist);
          console.log(artist.intBornYear);
          console.log(this.artistData.strBiographyEN);
        });
        console.log(this.artistD[0].strArtist);
        console.log(typeof (data.artists)); this.artistD


        console.log(data.artists);

        // this.artistD = (data.artists);
        console.log(data['artists']);
        console.log(data.artists);
      });
    // console.log(data);

  }

}
