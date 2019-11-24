import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateSharedLazyModule } from '../translate-shared-lazy/translate-shared-lazy.module';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryPopupComponent } from './gallery-popup/gallery-popup.component';
import { GalleryService } from './gallery.service';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateSharedLazyModule
  ],
  declarations: [GalleryComponent, GalleryGridComponent, GalleryPopupComponent],
  providers: [GalleryService]
})
export class GalleryModule {}
