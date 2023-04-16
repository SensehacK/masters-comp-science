import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Importing Models for Typecasting
import { ArtistDB } from '../../model/audioDB/artistDB';
import { AlbumsDB, Album } from '../../model/audioDB/albumDB';


@Injectable({
  providedIn: 'root'
})
export class AudioDBService {

  // Variables
  urlArtistInfo = 'https://theaudiodb.com/api/v1/json/2/discography.php?s=';
  urlArtistAlbum = 'https://theaudiodb.com/api/v1/json/2/discography.php?s=';

  artistName: string;
  albumD = []; // Array of Album Object
  albumData: Album; // Data Model of Album

  constructor(private http: HttpClient) { }

  // Method for getting data over API JSON
  getArtistInfo(artistName: string): Observable<ArtistDB> {
    this.artistName = artistName;
    // Return Dynamic string
    return this.http.get<ArtistDB>(this.urlArtistInfo + encodeURI(artistName));
  }

  // Method for retrieving Artist Albums over API JSON
  getArtistAlbums(artistName: string): Observable<AlbumsDB> {
    this.artistName = artistName;
    // Return Dynamic string
    return this.http.get<AlbumsDB>(this.urlArtistAlbum + encodeURI(artistName));
  }

  // Storing JSON response data using Interface so that it could be easily accessible everywhere.
  storeData() {
    this.getArtistAlbums(this.artistName)
      .subscribe((response) => {
        // Accessing Data for each array element
        response['album'].forEach(element => {
          this.albumData = element;
          this.albumD.push(this.albumData);
        });
        return;
      });
  }

  /* Abstract Public exposed function
  Retrieve ZGF0YQ== which would only be used by other classes
  for clean code flow and not exposing more core functions of a service class
  */
  retrieveData(albumID: number) {
    /* Null error handling or Direct Route accessing handling
    Calling function for debugging manually
    and setting artist value as we assume it would be already set before.
    */
    this.artistName = this.artistName ? this.artistName : 'Eminem';

    return new Promise((resolve, reject) => {
      // Calling yet another func ( Always love Callback Hell, Deadlock and  Race Conditions.)
      this.getArtistAlbums(this.artistName)
        .subscribe((response) => {
          // Accessing Data for each array element
          response['album'].forEach(element => {
            this.albumData = element;
            this.albumD.push(this.albumData);
          });
          this.albumD.forEach(albumObj => {
            if (parseInt(albumObj.idAlbum) === albumID) {
              this.albumData = albumObj;
              resolve(this.albumData);
              // return albumObj as Album; // Didn't worked for keeping return promise.
            }
          });
          reject('Album not found');
        });
    });
  }
}

/* Dev Debug instance URL for J Cole
    artistDevURL = 'https://www.theaudiodb.com/api/v1/json/195233/search.php?s=J%20cole';
    urlArtistAlbum = 'https://theaudiodb.com/api/v1/json/195233/searchalbum.php?s=J%20cole';
   return this.http.get<ArtistDB>(this.artistDevURL);
*/
