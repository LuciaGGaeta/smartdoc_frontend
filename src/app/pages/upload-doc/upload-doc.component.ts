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
    if (this.selectedFile.size === 0) {
      alert('Seleziona un file prima di caricarlo');
      return;
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    this.fileService.uploadDoc(formData).subscribe({
      next: data => {
        alert("File caricato correttamente");
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }



}
