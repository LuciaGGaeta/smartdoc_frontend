import { Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private http: HttpClient) {}

  getDocs() {
    this.http.post('http://localhost:8080/api/getdocs',{}).subscribe(
      res => {
        console.log(res);
        alert('Successo!');
      },
      error => {
        console.log(error);
        alert('Errore!');
      }
    );
  }
}
