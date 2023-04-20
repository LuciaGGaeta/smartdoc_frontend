import { Injectable } from '@angular/core';
import {Folder} from "../model/folder";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FileService {
  constructor(private http: HttpClient) {}
  getFolders(): Observable<Folder[]>{
    return this.http.get<Folder[]>('http://localhost:8080/api/getdocs');
  }

  getFolderByName(folderName: string): Observable<Folder> {
    return this.http.post<Folder>('http://localhost:8080/api/getdoc', folderName);
  }

  uploadDoc(formData: FormData){
    return this.http.post<void>('http://localhost:8080/api/upload', formData);
  }

  getFile(fileName:string):Observable<Blob> {
    return this.http.get('http://localhost:8080/api/downloadBlob', { params: { fileName }, responseType: 'blob' })
  }


}
