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

  urlArtistInfo = 'https://www.theaudiodb.com/api/v1/json/195233/search.php?s=';
  urlArtistAlbum = 'https://theaudiodb.com/api/v1/json/195233/searchalbum.php?s=';

  artistName = '';

  albumD = []; // Array of Album Object
  albumData: Album; // Data Model of Album

  constructor(private http: HttpClient) { }

  // Method for getting data over API JSON
  getArtistInfo(artistName: string): Observable<ArtistDB> {
    this.artistName = artistName;
    // Return Dynamic string
    return this.http.get<ArtistDB>(this.urlArtistInfo + encodeURI(artistName));
  }

  getArtistAlbums(artistName: string): Observable<AlbumsDB> {
    this.artistName = artistName;
    // Return Dynamic string
    console.log(this.urlArtistAlbum + encodeURI(artistName));

    return this.http.get<AlbumsDB>(this.urlArtistAlbum + encodeURI(artistName));
  }

  storeData(): Promise<void> {
    this.getArtistAlbums(this.artistName)
      .subscribe((response) => {
        // Accessing Data for each array element
        response['album'].forEach(element => {
          console.log(element);
          this.albumData = element;
          this.albumD.push(this.albumData);
        });
        return;
      });
  }

  retrieveData(albumID: number): Album {
    console.log('Data in retrieveData');
    // calling function for debugging manually
    this.artistName = 'Eminem';
    // this.storeData().then(() => {
    //   this.albumD.forEach(albumObj => {
    //     console.log('Data in albumArray', albumObj.idAlbum);
    //     if (albumObj.idAlbum === albumID) {
    //       return albumObj as Album;
    //     } else {
    //       return 0;
    //     }
    //   });
    // });

    this.getArtistAlbums(this.artistName)
      .subscribe((response) => {
        // Accessing Data for each array element
        response['album'].forEach(element => {
          console.log(element);
          this.albumData = element;
          this.albumD.push(this.albumData);
        });

        console.log('The artist ID ', albumID);

        this.albumD.forEach(albumObj => {
          console.log('Data in albumArray', albumObj.idAlbum);
          console.log(typeof (albumObj.idAlbum));
          console.log(typeof (albumID));


          if (parseInt(albumObj.idAlbum) === albumID) {
            console.log('Found the album', albumObj.idAlbum);
            console.log('Found the album', albumObj.strAlbum);
            console.log('Full object ', albumObj);

            return albumObj as Album;
          } else {
            return 0;
          }
        });


      });


  }

}
/* Dev instance URL for J Cole
    artistDevURL = 'https://www.theaudiodb.com/api/v1/json/195233/search.php?s=J%20cole';
   return this.http.get<ArtistDB>(this.artistDevURL);
  */