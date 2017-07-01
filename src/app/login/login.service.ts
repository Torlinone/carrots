import {Injectable} from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import {CurrentUser, User} from '../model/user-model';
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

const LOG_URL = '/carrots-admin-ajax/a/login';

@Injectable()
export class LoginService {

  constructor(private http: Http, private router: Router) { }

  getLogMes(user: User): Observable<CurrentUser> {

    console.log('enter getLogMes()');
    // json
    // let body = JSON.stringify({'name': user.name, 'pwd': user.password});
    // let headers = new Headers({'Content-Type': 'application/json'});

    // string
    let body = `name=${user.name}&pwd=${user.password}`;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(LOG_URL, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response){
    console.log('enter extractData()');

    const body = res.json();
    console.log(`返回数据：`);
    console.log(body);
    return body || {};
  }

  private handleError (error: any) {
    console.log('enter handleError()');

    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
    return  Observable.throw(errMsg);
  }

  // 退出登录，清除currentUser
  public logout() {
    localStorage.removeItem('currentUser');
    console.log('用户已退出登录。');
    // turn to login page
    this.router.navigate(['/login']);
    console.log('转到登录页面。');
  }
}

