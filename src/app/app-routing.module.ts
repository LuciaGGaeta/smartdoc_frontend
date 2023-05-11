import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UploadDocComponent} from "./pages/upload-doc/upload-doc.component";
import {DocsPageComponent} from "./pages/docs-page/docs-page.component";
import {FilesPageComponent} from "./pages/files-page/files-page.component";

import {HomepageComponent} from "./pages/homepage/homepage.component";
import {HomePageLayoutComponent} from "./components/home-page-layout/home-page-layout.component";

const routes: Routes = [
  {path: '', component:HomePageLayoutComponent,
    children: [
      {
        path:'home',
        component:HomepageComponent
      },
      {
        path:'',
        component:HomepageComponent
      },
      {
        path: 'docsPage',
        component:DocsPageComponent
      },
      {
        path: 'docsPage/filesPage/:name',
        component:FilesPageComponent
      },
      {
        path: 'upload',
        component:UploadDocComponent
      }
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
