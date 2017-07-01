import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DeleteDataService {

  constructor(private http: Http) { }

  public deleteData(url: string, deleteText: number | string): Observable<any> {

    url += deleteText;
    // console.log('this deleteService get deleteText is :' + url);

    return this.http.delete(url)
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(res: any) {  // why type of res is not Response type ?
    let body = res.json();
    // console.log('deleteService response is : ');
    // console.log(res.json());
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.stack} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
