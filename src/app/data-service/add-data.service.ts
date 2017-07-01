import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AddDataService {

  private postFun: any = new Observable();

  constructor(private http: Http) { }

  public postData(url: string, content: URLSearchParams): Observable<any> {

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});

    this.postFun = this.http.post(url, String(content), options);

    return this.postFun.map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.stack} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
