import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  lyricsData =
    `Lorem IpsumLorem ipsum dolor sit amet c
  onsectetur adipisicing elit. Eligendi sintexpedita dolorem fugiat possimus 
  officia perspiciatis accusamus commodi eumtotam 
  blanditiis quasi facere vitae quas, nam atque iure quibusdam 
  corporis aeveniet numquam, nesciunt esse natus! 
  Ratione error earum eveniet ? `;

  lyricsBaseURL = "https://api.lyrics.ovh/v1/Eminem/Stan";

  constructor(private http: HttpClient) { }


  getLyricsForSongIDWithParam(artistName: string, artistSongName: string) {

    // console.log('In getLyricsForSongId', artistName, artistSongName);

    let lyricsBaseURL = "https://api.lyrics.ovh/v1";
    lyricsBaseURL = lyricsBaseURL.concat('/', artistName);
    lyricsBaseURL = lyricsBaseURL.concat('/', artistSongName);
    console.log('lyricsBaseURL', lyricsBaseURL);
    this.lyricsBaseURL = lyricsBaseURL;
    return this.http.get(lyricsBaseURL);

    // .subscribe(
    //   (result) => {
    //     console.log(JSON

    // return this.http.get(this.lyricsBaseURL);

    // .subscribe(
    //   (result) => {
    //     console.log(JSON.stringify(result['lyrics']));

    //     this.lyricsData = JSON.stringify(result['lyrics']);
    //     // console.log(typeof (result['lyrics']));
    //     // return JSON.stringify(result['lyrics']);
    //     return result;
    //   }
    //   // this.lyricsData = result
    // );
  }

  getLyricsForSongID() {
    return this.http.get(this.lyricsBaseURL);
  }

  getLyrics() {
    return this.lyricsData;
  }
}
