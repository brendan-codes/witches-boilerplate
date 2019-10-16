import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }


  witches = [];


  getWitches() {
    return this.witches;
  }

  pushToWitches(witch) {
    return this.witches.push(witch);
  }
}
