import { Component, OnInit } from '@angular/core';

// DB Service
import { AudioDBService } from '../services/audio-db.service';

// Model Import
import { Artist } from 'src/model/audioDB/artistDB';
import { Album } from 'src/model/audioDB/albumDB';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.page.html',
  styleUrls: ['./album-details.page.scss'],
})
export class AlbumDetailsPage implements OnInit {
  id;
  idAlbum = 0;
  albumObject: Album;

  queryParamRes: Params;

  constructor(private audioService: AudioDBService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log('printing id of the parameter', this.id);

    this.route.queryParams.subscribe(res => {
      this.queryParamRes = res;
      console.log(res.keys());
    });

    this.getAlbumDetails(this.idAlbum);

  }

  getAlbumDetails(idAlbum: number) {
    this.albumObject = this.audioService.retrieveData(idAlbum);

  }

}
