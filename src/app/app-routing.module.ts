import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-us',
    loadChildren: './modules/about-us/about-us.module#AboutUsModule'
  },
  {
    path: 'our-operation',
    loadChildren: './modules/our-operation/our-operation.module#OurOperationModule'
  },
  {
    path: 'contact-us',
    loadChildren: './modules/contact-us/contact-us.module#ContactUsModule'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
