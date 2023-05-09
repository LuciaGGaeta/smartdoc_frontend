import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NavbarModule} from 'angular-bootstrap-md';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {
  IgxIconModule,
  IgxNavbarModule,
  IgxButtonModule
} from "igniteui-angular";
import {UploadDocComponent} from './pages/upload-doc/upload-doc.component';
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";
import { FileSaverModule } from 'ngx-filesaver';
import { DocsPageComponent } from './pages/docs-page/docs-page.component';


import { FilesPageComponent } from './pages/files-page/files-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    FooterComponent,
    UploadDocComponent,
    DocsPageComponent,
    FilesPageComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    FileSaverModule,
    AppRoutingModule,
    NavbarModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,
    MdbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
