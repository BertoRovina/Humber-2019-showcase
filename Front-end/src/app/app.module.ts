import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetPageComponent } from './get-page/get-page.component';
import { GetByIdFormComponent } from './get-by-id-form/get-by-id-form.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GetPageComponent,
    GetByIdFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
