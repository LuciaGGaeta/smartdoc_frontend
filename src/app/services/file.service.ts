import { Injectable } from '@angular/core';
import {Folder} from "../model/folder";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from 'src/app/environments/envinronment.prod';

@Injectable({
  providedIn: 'root'
})


export class FileService {

  constructor(private http: HttpClient) {}

  getFolders(): Observable<Folder[]>{
    return this.http.get<Folder[]>(environment.apiUrl+'/getdocs');
  }

  getFolderByName(folderName: string): Observable<Folder> {
    return this.http.post<Folder>(environment.apiUrl+'/getdoc', folderName);
  }

  uploadDoc(formData: FormData){
    return this.http.post<void>(environment.apiUrl+'/upload', formData);
  }

  getFile(fileName:string):Observable<Blob> {
    return this.http.get(environment.apiUrl+'/downloadBlob', { params: { fileName }, responseType: 'blob' })
  }


}
