import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GetPageComponent} from './get-page/get-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'get-page', component: GetPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
