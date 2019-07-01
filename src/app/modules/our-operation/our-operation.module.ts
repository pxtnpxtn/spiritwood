import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurOperationComponent } from './our-operation.component';
import { RouterModule, Routes } from '@angular/router';

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
    )
  ],
  declarations: [OurOperationComponent]
})
export class OurOperationModule { }
