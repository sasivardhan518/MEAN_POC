import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

result: string ;

constructor(private _http: Http) {
}

sendRequest() {
return this._http.get('http://localhost:3000/api/test')
.map(result => 
  result.json()
);
}
}
