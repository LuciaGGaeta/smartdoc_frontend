
import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

interface Folder{
  name: string;
  files: string[];
}
@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.css']
})
export class DocsPageComponent implements OnInit{
  constructor(private http: HttpClient) {}
  folderNameParent:String = "";
  folders: Folder[] = [];
  folder: Folder = {name:"", files:[]};
  ngOnInit(): void {
    // Chiamare il metodo caricaDati() all'interno di ngOnInit()
    this.getDocs();
  }

  getDocs() {
    this.http.get('http://localhost:8080/api/getdocs').subscribe(
      res => {
        console.log(res);
        this.folders = res as Folder[];
      },
      error => {
        console.log(error);
        alert('Errore!');
      }
    );
  }
  getDoc(folderName: string) {
    this.folderNameParent = folderName;
    this.http.post('http://localhost:8080/api/getdoc',folderName).subscribe(
      res => {
        console.log(res);
        this.folder = res as Folder;
      },
      error => {
        console.log(error);
        alert('Errore!');
      }
    );

  }


  onCardClick(folderName: string) {

    console.log(folderName);

     this.getDoc(folderName);

  }


}
