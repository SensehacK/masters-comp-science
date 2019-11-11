import { Component } from '@angular/core';
import { LyricsService } from '../services/lyrics.service';
import { AudioDBService } from '../services/audio-db.service';
import { Artists, Artist } from '../../data/audioDB/audioDB_Struct';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  artistName = '';
  artistSongName = '';
  songLyrics = "NA";

  artistArr: Artist[];

  constructor(private lyricsService: LyricsService,
    private audioService: AudioDBService) {
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
        console.log(response);
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

    this.audioService.getInfoForArtist(this.artistName)
      .subscribe((response) => {
        console.log(response);
        console.log(JSON.stringify(response));

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
