import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';

// Importing Models for Typecasting
import { ArtistDB } from '../../model/audioDB/artistDB';
import { AlbumsDB } from '../../model/audioDB/albumDB';


@Injectable({
  providedIn: 'root'
})
export class AudioDBService {

  urlArtistInfo = 'https://www.theaudiodb.com/api/v1/json/195233/search.php?s=';
  urlArtistAlbum = 'https://theaudiodb.com/api/v1/json/195233/searchalbum.php?s=';

  constructor(private http: HttpClient) { }

  // Method for getting data over API JSON
  getArtistInfo(artistName: string): Observable<ArtistDB> {
    // Return Dynamic string
    return this.http.get<ArtistDB>(this.urlArtistInfo + encodeURI(artistName));
  }

  getArtistAlbums(artistName: string): Observable<AlbumsDB> {
    // Return Dynamic string
    console.log(this.urlArtistAlbum + encodeURI(artistName));

    return this.http.get<AlbumsDB>(this.urlArtistAlbum + encodeURI(artistName));
  }

}
/* Dev instance URL for J Cole
    artistDevURL = 'https://www.theaudiodb.com/api/v1/json/195233/search.php?s=J%20cole';
   return this.http.get<ArtistDB>(this.artistDevURL);
  */