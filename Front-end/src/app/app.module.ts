import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GetPageComponent } from './get-page/get-page.component';
import { GetByIdFormComponent } from './get-by-id-form/get-by-id-form.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
    declarations: [
        AppComponent,
        GetPageComponent,
        GetByIdFormComponent,
        SideNavComponent,
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
