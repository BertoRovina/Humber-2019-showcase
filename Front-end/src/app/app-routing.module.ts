import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GetPageComponent} from './get-page/get-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {PutPageComponent} from './put-page/put-page.component';
import {DelPageComponent} from './del-page/del-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home-page', component: HomePageComponent },
  { path: 'get-page', component: GetPageComponent },
  { path: 'post-page', component: PostPageComponent },
  { path: 'put-page', component: PutPageComponent },
  { path: 'del-page', component: DelPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
