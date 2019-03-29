import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GetPageComponent} from './get-page/get-page.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home-page', component: HomePageComponent },
  { path: 'get-page', component: GetPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
