import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  witches: any = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    console.log('files are running!');
    this.getAllWitches();
  }

  getAllWitches() {
    const observable = this.http.getAll();
    observable.subscribe((data: any) => {
      this.witches = data;
    });
  }

}
