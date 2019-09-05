import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToplistComponent } from './toplist/toplist.component';
import { MidlistComponent } from './midlist/midlist.component';
import { Content1Component } from './content1/content1.component';
import {FormsModule} from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { ListformComponent } from './listform/listform.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToplistComponent,
    MidlistComponent,
    Content1Component,
    ContactFormComponent,
    FooterComponent,
    ListformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
