import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {
  IgxIconModule,
  IgxNavbarModule,
  IgxButtonModule
} from "igniteui-angular";
import { DocumentsComponent } from './components/documents/documents.component';
import { UploadDocComponent } from './pages/upload-doc/upload-doc.component';

import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    FooterComponent,
    DocumentsComponent,
    UploadDocComponent,
    NgbCollapseModule
  ],
  imports: [

    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
