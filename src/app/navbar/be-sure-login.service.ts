/*
* 获取本地存储的一登录用户信息
*/

import { Injectable } from '@angular/core';
import { CurrentUser } from "../model/user-model";
import {Router} from "@angular/router";

const NOT_LOGIN = '路人';

@Injectable()
export class BeSureLoginService{

  public notLogined: boolean;
  public currentUser: CurrentUser;

  constructor(private router: Router) {
    // this.checkStatus();
  }

  public checkStatus() {
    // the currentUser of localStorage be saved in login.component.ts
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('在be-sure-login.service中读取的用户信息为：' + this.currentUser);

    try {
      // 下面这句不能取代三目运算符，只是取非
      this.notLogined = !this.currentUser;
    }catch (err) {
      console.log('currentUser中的错误信息是：' + err.message);
    }

    console.log('用户未登陆？：' + this.notLogined);
    // if haven't login, back to LoginComponent
    this.notLogined ? this.router.navigate(['/login']) : null;
  }

  // 返回值为any类型，由于可能会有null的情况 --> 是我傻了，怎么可能有null
  public getCurrentUserRole(): string {
    return this.notLogined ? NOT_LOGIN : this.currentUser.data.manager.name;
  }

  public getCurrentUserName(): string {
    return this.notLogined ? NOT_LOGIN : this.currentUser.data.role.name;
  }

}
