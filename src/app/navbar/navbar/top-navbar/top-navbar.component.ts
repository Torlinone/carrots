import {Component, OnInit} from '@angular/core';
import {BeSureLoginService} from '../../be-sure-login.service';
import {LoginService} from '../../../login/login.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit{

  public currentUserRole: string;
  public currentUserName: string;

  constructor(private beSureLogin: BeSureLoginService,
              private loginService: LoginService) {
    // this.getUserInfo();
  }

  goLogout() {
    this.loginService.logout();
  }

  private getUserInfo(): void {
    this.beSureLogin.checkStatus();
    this.currentUserRole = this.beSureLogin.getCurrentUserRole();
    this.currentUserName = this.beSureLogin.getCurrentUserName();
  }

  ngOnInit() {
    this.getUserInfo();
  }

}
