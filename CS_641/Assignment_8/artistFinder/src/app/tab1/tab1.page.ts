import { Component } from '@angular/core';
// DB Service
import { AudioDBService } from '../services/audio-db.service';

// Model Import
import { Artist } from 'src/model/audioDB/artistDB';
import { Album } from 'src/model/audioDB/albumDB';


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
  albumD = []; // Array of Album Object
  albumData: Album; // Data Model of Album

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


  loadAlbums() {
    console.log('The Album is mastahpeeice! babbbyyyyyy');
    console.log('Reference to the joke Link: https://www.youtube.com/watch?v=dDagv6SA8nw&t=2s');

    this.audioService.getArtistAlbums(this.artistName)
      .subscribe((data) => {
        console.log('DAta printing', data);
        console.log(typeof (data));

        // data["album"][0].strAlbum
        // this.albumData = data[0].albums;
        console.log(data[0]);
        console.log(data['album'][0].strAlbum);

        data['album'].forEach(element => {
          console.log(element);
          this.albumData = element;
          this.albumD.push(this.albumData);
        });
      });
  }

}
