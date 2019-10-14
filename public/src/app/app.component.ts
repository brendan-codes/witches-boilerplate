import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  newWitch: any = {
    name: '',
    broom: '',
    coven: ''
  };
  hasErrors = false;
  errors: any;

  witches = [];

  constructor(private http: HttpService) {

  }

  ngOnInit() {
    this.getAllWitches();
  }

  getAllWitches() {
    const observable = this.http.getAllAlt();
    observable.subscribe((data: any) => {
      console.log(data);
      this.witches = data;
    });
  }

  submitWitch() {
    const observable = this.http.createWitch(this.newWitch);
    observable.subscribe((data: any) => {

      if (data.message === 'fail') {
        console.log(data);
        this.hasErrors = true;
        this.errors = data.err;
      } else {
        this.hasErrors = false;
        this.getAllWitches();
      }
    });
  }
}
