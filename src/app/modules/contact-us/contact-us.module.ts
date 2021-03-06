import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateSharedLazyModule } from '../translate-shared-lazy/translate-shared-lazy.module';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent
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
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
