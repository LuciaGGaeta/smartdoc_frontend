
import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from '@angular/core';
import {Folder} from "../../model/folder";
import {FileService} from "../../services/file.service";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.css']
})
export class DocsPageComponent implements OnInit{
  constructor(private fileService: FileService) { }
  folders: Observable<Folder[]> = of([]);
  folder?:Observable<Folder>;

  ngOnInit(): void {
    this.fileService.getFolders()
      .pipe(
        map((folders: Folder[]) => {
          this.folders = of(folders);
        })
      )
      .subscribe();
  }

  onCardClick(folderName: string) {
    console.log(folderName);
    this.folder=this.fileService.getFolderByName(folderName);
    console.log(this.folder);
  }


}
