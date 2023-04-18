import { Injectable } from '@angular/core';
import {Folder} from "../model/folder";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private http: HttpClient) {}
  getFolders(): Observable<Folder[]> {
      return this.http.get<Folder[]>('http://localhost:8080/api/getdocs').pipe(
        catchError((error: HttpErrorResponse)=>{
          console.log(error);
          return throwError('Errore durante la richiesta delle cartelle');
        })
      );
  }

  getFolderByName(folderName: string): Observable<Folder> {
    return this.http.post<Folder>('http://localhost:8080/api/getdoc', folderName).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('Errore durante la richiesta della cartella');
      })
    );
  }

  uploadDoc(selectedFile: File): void {
    if (selectedFile.size === 0) {
      alert('Seleziona un file prima di caricarlo');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile, selectedFile.name);
    this.http.post('http://localhost:8080/api/upload', formData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        alert("Si è verificato un errore!");
        return throwError('Errore durante l\'upload del file');
      })
    ).subscribe(
      res => {
        console.log(res);
        alert('File caricato con successo!');
      },
      error => {
        console.log(error);
        alert("Si è verificato un errore!");
      }
    );
  }

}
