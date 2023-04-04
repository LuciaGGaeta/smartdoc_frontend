import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.css']
})
export class UploadDocComponent {
  selectedFile : File = new File([],"");
  constructor(private http: HttpClient) {}

  onFileSelected(event : any){
    this.selectedFile = <File> event.target.files[0];
  }
  uploadDoc(){
    if (this.selectedFile.size === 0) {
      alert('Seleziona un file prima di caricarlo');
      return;
    }

    const formData = new FormData();

    formData.append('file',this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8080/api/upload', formData).subscribe(res=>{console.log(res);
      alert('File caricato con successo!');}, error => {
        console.log(error);
        alert("Si è verificato un errore!");
      }
      );
  }

}
