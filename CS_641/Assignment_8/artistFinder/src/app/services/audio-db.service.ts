import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtistDB } from '../../model/audioDB/artistDB';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioDBService {

  baseURL = 'https://www.theaudiodb.com/api/v1/json/195233/search.php?s=';

  constructor(private http: HttpClient) { }

  // Method for getting data over API JSON
  getArtistInfo(artistName: string): Observable<ArtistDB> {
    // Return Dynamic string
    return this.http.get<ArtistDB>(this.baseURL + encodeURI(artistName));
  }

}
/* Dev instance URL for J Cole
    artistDevURL = 'https://www.theaudiodb.com/api/v1/json/195233/search.php?s=J%20cole';
   return this.http.get<ArtistDB>(this.artistDevURL);
  */