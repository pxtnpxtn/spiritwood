import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateSharedLazyModule } from '../translate-shared-lazy/translate-shared-lazy.module';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      routes
    ),
    TranslateSharedLazyModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }