import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// DB Service
import { AudioDBService } from '../services/audio-db.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.page.html',
  styleUrls: ['./album-details.page.scss'],
})
export class AlbumDetailsPage implements OnInit {

  // Variables
  artistName: string;
  idAlbum = 2110668;
  albumObject: any;
  queryParamRes: Params;

  constructor(private audioService: AudioDBService,
    private route: ActivatedRoute) {
    this.artistName = 'Kautilya';
  }

  ngOnInit() {

    const albumIDTemp = this.route.snapshot.paramMap.get('id');
    if (albumIDTemp.length > 5) {
      this.idAlbum = parseInt(albumIDTemp);
    }
    this.getAlbumDetails(this.idAlbum);

  }

  getAlbumDetails(idAlbum: number) {

    this.audioService.retrieveData(idAlbum)
      .then(data => {
        this.albumObject = data;

        // Setting up data
        this.artistName = this.albumObject.strArtist;
        // Setting Wikipedia url as need to be offset with URL string interpolation
        this.albumObject.strWikipediaID = 'https://en.wikipedia.org/wiki/' + this.albumObject.strWikipediaID;
      });

  }

}
