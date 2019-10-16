import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

   getAll() {
     return this.http.get('/witches');
   }

   createWitch(data) {
     return this.http.post('/witches', data);
   }

   getById(id) {
     return this.http.get(`/witches/${id}`);
   }

   updateById(id, data) {
     return this.http.put(`/witches/${id}`, data);
   }

   deleteById(id) {
     return this.http.delete(`/witches/${id}`);
   }


}
