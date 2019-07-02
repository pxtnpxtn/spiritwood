import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurOperationComponent } from './our-operation.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateSharedLazyModule } from '../translate-shared-lazy/translate-shared-lazy.module';

const routes: Routes = [
  {
    path: '',
    component: OurOperationComponent
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
  declarations: [OurOperationComponent]
})
export class OurOperationModule { }
