import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtistDB } from '../../model/audioDB/artistDB';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioDBService {

  baseURL = 'https://sensehack.github.io';
  artistTrialURL = 'https://www.theaudiodb.com/api/v1/json/195233/search.php?s=J%20cole';
  constructor(private http: HttpClient) { }


  getArtistInfo(artistName: string): Observable<ArtistDB> {
    console.log('Yo yo the base url + artistName', this.artistTrialURL + artistName);

    return this.http.get<ArtistDB>(this.artistTrialURL);

  }
}
