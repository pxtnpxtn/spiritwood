import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef
} from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery-popup',
  templateUrl: './gallery-popup.component.html',
  styleUrls: ['./gallery-popup.component.scss']
})
export class GalleryPopupComponent {
  @Input() imageUrl: string;

  // TODO: Make closePopup() fire when clicking outside of modal, not just on X.
  // @HostListener('document:click', ['$event'])
  // public closePopup(event) {
  //   if (event.button !==2 && !this.elementRef.nativeElement.contains(event.target)) {
  //     // this.galleryService.closeGalleryPopup();
  //   }
  // }

  public closePopup() {
    this.galleryService.closeGalleryPopup();
  }

  constructor(
    public galleryService: GalleryService,
    private elementRef: ElementRef
  ) {}
}
