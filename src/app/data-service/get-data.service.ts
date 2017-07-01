import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GetDataService {

  private getFun: any = new Observable();

  constructor(private http: Http) { }

  public getData(url: string, searchText?: URLSearchParams): Observable<any> {



    if (searchText) {
      console.log(`searchText in  getService is: ${searchText}`);
      this.getFun = this.http.get(url, {search: String(searchText)});
    }else {
      this.getFun = this.http.get(url);
    }

    return this.getFun.map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(`getService response is : ${res}`);
    return res.json() || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.stack} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
