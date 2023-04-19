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
  folder?: Folder;
  constructor(private route: ActivatedRoute, private fileService: FileService) { }

  ngOnInit() {
    // Recupera il valore del parametro :name dalla URL
    this.name = this.route.snapshot.params['name'];

    if (this.name != null) {
      this.fileService.getFolderByName(this.name).subscribe(res=>{
        this.folder = res as Folder;
        this.files = this.folder.files;
      });
    }else{
      console.log("Non entro");
    }

  }

}
