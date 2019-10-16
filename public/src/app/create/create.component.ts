import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newWitch = {
    name: '',
    broom: '',
    coven: ''
  };
  errors = [];

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {

  }

  submitWitch() {
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
        // this.getAllWitches();
        this.router.navigate(['/home']);
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
