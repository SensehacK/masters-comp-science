import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  imageData: any;

  constructor(private camera: Camera, ) { }



  onClickCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };


    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      this.imageData = imageData;
      console.log('######################');
      console.log(imageData);

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imageData = base64Image;
      console.log(base64Image);
    }, (err) => {
      // Handle error
    });
  }


}
