import { Component, ViewChild } from '@angular/core';
// DB Service
import { AudioDBService } from '../services/audio-db.service';

// Model Import
import { Artist } from 'src/model/audioDB/artistDB';
import { Album } from 'src/model/audioDB/albumDB';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  @ViewChild(IonSlides) slides: IonSlides;

  // Property Binding for easy communication with View
  artistName = '';
  artistTitle = '';
  songLyrics = 'NA';
  artistD = []; // Array of Artist Object
  artistData: Artist; // Data Model of Artist
  albumD = []; // Array of Album Object
  albumData: Album; // Data Model of Album
  isIonSlideEnabled = false; // Ion slide Enabled

  constructor(private audioService: AudioDBService,
    private router: Router) {

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

        // Accessing Data for each array element
        data['album'].forEach(element => {
          console.log(element);
          this.albumData = element;
          this.albumD.push(this.albumData);
        });
        // Enabling the Next Button
        this.isIonSlideEnabled = true;
      });


  }

  goToSlide(idAlbum: string) {

    // this.slides.update();
    // Used to work for previous versions of Ionic -> Dependency library : HammerJS
    console.log('Gesture doesnt work & it is well documented for ionic 4');
    console.log('https://github.com/ionic-team/ionic/issues/19183');

    console.log('Which album pressed currently', idAlbum);
    this.router.navigate(['album-details', idAlbum]);
    this.slides.slideNext();
    this.slides.isEnd().then(
      (e) => {
        console.log('At the end', e);
        this.isIonSlideEnabled = !e;
      });

  }

  showAlbum() {
    // this.audioService.retrieveData();
  }

}
