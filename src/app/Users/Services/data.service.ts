import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get('/api/v1/users')
      .map(result => result.json().data);
  }

  createUser(body) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/v1/user', body, options)
      .map((res: Response) => res.json());
  }

  deleteUser(userId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.delete('/api/v1/user/' + userId, options)
      .map((res: Response) => res.json());
  }

}
