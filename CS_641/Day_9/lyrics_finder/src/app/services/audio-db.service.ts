import { Injectable } from '@angular/core';
import { Artists, Artist } from '../../data/audioDB/audioDB_Struct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AudioDBService {

  artistArr: Artist[];

  artistTrialURL = "https://www.theaudiodb.com/api/v1/json/195233/search.php?s=J%20cole"
  artistBaseURL = "https://www.theaudiodb.com/api/v1/json/195233/search.php?s=J%20cole"
  constructor(private http: HttpClient) { }



  getInfoForArtist(artistName: string) {
    console.log('Hi in Audio service', this.artistTrialURL);
    return this.http.get(this.artistTrialURL);
  }


}


