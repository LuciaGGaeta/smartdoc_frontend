import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { map } from 'rxjs/operators';
import {Folder} from "../../model/folder";
import {FileService} from "../../services/file.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-files-page',
  templateUrl: './files-page.component.html',
  styleUrls: ['./files-page.component.css']
})

export class FilesPageComponent implements OnInit {
  name?: string;
  files?: string[];
  folder?: Observable<Folder>;
  constructor(private route: ActivatedRoute, private fileService: FileService) { }

  ngOnInit() {
    // Recupera il valore del parametro :name dalla URL
    this.name = this.route.snapshot.params['name'];

    // Utilizza il valore del parametro :name come desiderato
    console.log('Valore del parametro :name:', this.name);
    if (this.name != null) {
      this.folder = this.fileService.getFolderByName(this.name);
      this.folder.pipe(
        map(folder => {
          // Accedi ai campi di Folder
          this.files =   folder.files;
        })
      ).subscribe();

    }else{
      console.log("Non entro");
    }

  }

}
