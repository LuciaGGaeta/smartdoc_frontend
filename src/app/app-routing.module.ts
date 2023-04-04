import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {UploadDocComponent} from "./pages/upload-doc/upload-doc.component";

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'upload', component:UploadDocComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
