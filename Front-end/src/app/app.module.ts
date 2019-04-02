import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GetPageComponent } from './get-page/get-page.component';
import { GetByIdFormComponent } from './get-by-id-form/get-by-id-form.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerComponent } from './customer/customer.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
    declarations: [
        AppComponent,
        GetPageComponent,
        GetByIdFormComponent,
        SideNavComponent,
        HomePageComponent,
        CustomerComponent,
        CategoryComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

@NgModule({
  declarations: [
    AppComponent,
    GetPageComponent,
    GetByIdFormComponent,
    SideNavComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
