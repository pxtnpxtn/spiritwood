import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  openImagePopup($event) {
    this.galleryService.openGalleryPopup($event);
  }

  constructor(public galleryService: GalleryService) {}
}
