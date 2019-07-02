import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateSharedLazyModule } from '../translate-shared-lazy/translate-shared-lazy.module';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent
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
  declarations: [AboutUsComponent]
})
export class AboutUsModule { }
