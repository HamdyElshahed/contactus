import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ContactUs from '../models/contactus';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  addContactUs(data : ContactUs) :Observable<any> {
    return this.http.post('https://takidapp.com:8007/api/ContactUs/Add' , data)
  }
}
