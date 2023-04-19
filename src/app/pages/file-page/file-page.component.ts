import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FileService} from "../../services/file.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.css']
})
export class FilePageComponent implements OnInit{
  constructor(private route: ActivatedRoute, private fileService: FileService) { }
  name:string = "";

  ngOnInit() {
    this.name = this.route.snapshot.params['fileName'];
    console.log(this.name);
    if (this.name != null) {
         this.fileService.getFile(this.name).subscribe({
           next: data => {
             console.log(data);
           },
           error: error => {
             console.error('There was an error!', error);
           }
         });
      }else{
        console.log("Non entro");
      }
  }
}
