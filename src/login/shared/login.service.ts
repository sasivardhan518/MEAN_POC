import { Injectable } from '@angular/core';
import { IUser, IUserCredentials } from '../../Models/IUser';
import { Observable } from 'rxjs/Observable';
import { apiConfig } from '../../apiConfig';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(user: IUserCredentials): Observable<any> {
    return this.http.post(apiConfig.urls.loginUser, JSON.stringify(user), httpOptions).map((response: Response) =>  response);
  }
}
