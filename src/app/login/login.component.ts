import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from './login.service';
import {User, CurrentUser} from '../model/user-model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public user: User = new User;
  public currentUser: CurrentUser = new CurrentUser;
  public logMsg: string;

  public loginForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      loginName: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(4)]],
      loginPassword: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(4)]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if(this.loginForm.valid) {
      this.getLoginInfo();
      console.log(this.user);
      this.loginService.getLogMes(this.user)
        .subscribe(currentUser => {
            this.currentUser = currentUser;
            // console.log(`loginComponent_返回数据为：${this.currentUser.message}`);
            this.showLoginMsg(this.currentUser.message);
          }
        );
      // 登录成功转到主页
      // this.goMainPage();
    }
  }

  // 传值给user
  private getLoginInfo(): void {
    this.user.name = this.loginForm.get('loginName').value;
    this.user.password = this.loginForm.get('loginPassword').value;
  }

  // 将信息登录正确显示在页面上
  private showLoginMsg(msg: string): void {
    if(msg) {
      this.logMsg = msg;
      // 保存服务器返回信息,格式user-model.ts
      msg === 'success' ? this.loginSuccess() : null;
      console.log('存储的登录信息是:');

      try {
        console.log(JSON.parse(localStorage.currentUser));
      }catch (err) {
        console.log(err.message);
      }
    }
  }

  private loginSuccess() {
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    this.goMainPage();
  }

  private goMainPage() {
    this.router.navigate(['/navbar']);
  }
}
