import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  public showImage: boolean;
  public imgURL: string;

  public openGalleryPopup(image) {
    if (image.imgURL !== '') {
      this.showImage = true;
      this.imgURL = image.imgURL;
    }
  }

  public closeGalleryPopup() {
    this.showImage = false;
  }

  constructor() {}
}
