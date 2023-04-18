import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.css']
})
export class UploadDocComponent {
  selectedFile : File = new File([],"");

  constructor(private fileService: FileService) { }

  onFileSelected(event : any){
    this.selectedFile = <File> event.target.files[0];
  }
  uploadDoc(){
    this.fileService.uploadDoc(this.selectedFile);
  }

}
