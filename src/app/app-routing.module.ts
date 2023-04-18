import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {UploadDocComponent} from "./pages/upload-doc/upload-doc.component";
import {DocsPageComponent} from "./pages/docs-page/docs-page.component";
import {FilePageComponent} from "./pages/file-page/file-page.component";
import {FilesPageComponent} from "./pages/files-page/files-page.component";

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'upload', component:UploadDocComponent},
  {path: 'docsPage', component:DocsPageComponent},
  {path: 'filesPage', component:FilesPageComponent},
  {path: 'filePage', component:FilePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
