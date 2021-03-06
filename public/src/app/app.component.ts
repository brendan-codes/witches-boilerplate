import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private http: HttpService) {}

  newWitch: any = {
    name: '',
    broom: '',
    coven: ''
  };
  hasErrors = false;
  errors: any = [];
  witches = [];


  ngOnInit() {
    this.getAllWitches();
  }

  deleteWitch(id) {
    const observable = this.http.deleteById(id);
    observable.subscribe((data: any) => {
      this.getAllWitches();
    });
  }

  getAllWitches() {
    const observable = this.http.getAll();
    observable.subscribe((data: any) => {
      this.witches = data;
    });
  }

  submitWitch() {
    // tslint:disable-next-line:no-debugger
    debugger;
    const observable = this.http.createWitch(this.newWitch);
    observable.subscribe((data: any) => {
      if (data.message === 'fail') {
        this.errors = this.errorHelper(data.err.errors);
        console.log(this.errors);
      } else {
        this.errors = [];
        this.newWitch = {
          name: '',
          broom: '',
          coven: ''
        };
        this.getAllWitches();
      }
    });
  }

  errorHelper(errorMessage: any) {
    const errorArr = [];
    // tslint:disable-next-line:forin
    for (const error in errorMessage) {
      console.log(error);
      errorArr.push({path: errorMessage[error].path, message: errorMessage[error].message});
    }

    return errorArr;
  }
}
