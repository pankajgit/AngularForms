import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateUserFormService {
  // _url = '';
  _url = 'http://localhost:3000/userEnroll/';

  constructor( private _http: HttpClient) { }

  usrEnroll( usr: User) {
    return this._http.post<any>(this._url, usr);
  }
}
