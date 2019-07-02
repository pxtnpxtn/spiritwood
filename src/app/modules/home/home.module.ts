import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateSharedLazyModule } from '../translate-shared-lazy/translate-shared-lazy.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
  exports: [
    RouterModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
