import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PutDataService {

  constructor(private http: Http) { }

  public putData(url: string, body: URLSearchParams): Observable<any> {

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});

    return this.http.put(url, String(body), options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: any) {  // why type of res is not Response ?
    let body = res.json();
    console.log('putService response is : ');
    console.log(res.json());
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.stack} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
