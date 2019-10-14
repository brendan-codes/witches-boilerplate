import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
   }

   getAllAlt() {
     return this.http.get('/witches');
   }

   createWitch(data) {
     return this.http.post('/witches', data);
   }


}
