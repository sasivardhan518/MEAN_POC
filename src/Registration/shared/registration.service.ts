import { Injectable } from '@angular/core';
import { IUser } from '../../Models/IUser';
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
export class RegistrationService {
    constructor(private http: HttpClient) {
    }


    addUser(user: IUser): Observable<any> {
        return this.http.post(apiConfig.urls.addUsers, JSON.stringify(user),httpOptions).map((response: Response) => { return response; });
    };
}
