import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4
} from '../../../../assets/images/gallery.js';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent implements OnInit {
  public images1 = gallery1;
  public images2 = gallery2;
  public images3 = gallery3;
  public images4 = gallery4;

  @Output() viewImage = new EventEmitter<{ imgURL: string }>();

  public onImageClick(event) {
    if (window.innerWidth > 770) {
      this.viewImage.emit({
        imgURL: event.target.src
      });
    }
  }

  ngOnInit() {}

  constructor() {}
}
