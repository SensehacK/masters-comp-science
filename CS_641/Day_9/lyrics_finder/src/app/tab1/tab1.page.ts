import { Component } from '@angular/core';
import { LyricsService } from '../services/lyrics.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  artistName = '';
  artistSongName = '';
  songLyrics = "NA";

  constructor(private lyricsService: LyricsService) {
    // this.artistName = 'Kautilya';
    // this.artistSongName = 'Hustle Free';

    // Calling loadFunc
    this.loadFunc();
  }


  loadFunc() {

    //Loading
    console.log('Yo Sensehack!');

    // this.lyricsService.getLyricsForSongIDWithParam(this.artistName, this.artistSongName);

    this.lyricsService.getLyricsForSongID()
      .subscribe((response) => {
        this.songLyrics = JSON.parse(JSON.stringify(response['lyrics']));
      });

    // this.loadLyrics();
  }


  onClick() {
    console.log('Yo Sensehack!');

    this.lyricsService.getLyricsForSongIDWithParam(this.artistName, this.artistSongName)
      .subscribe((response) => {
        this.songLyrics = JSON.parse(JSON.stringify(response['lyrics']));
      });

  }

  onReset() {
    // Resetting the values
    this.artistName = 'Kautilya';
    this.artistSongName = 'Hustle Free';
  }
  async loadLyrics() {
    this.songLyrics = await this.lyricsService.getLyrics();
  }


}
