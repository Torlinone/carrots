import { Component, OnInit } from '@angular/core';
import {GetMainNavbarItemsService} from './get-main-navbar-items.service';
// 这是写的一个路由对照表，用不了
// import {routeTable} from "../../../model/route-table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
})
export class MainNavbarComponent implements OnInit {

  public oneAtATime = true;
  public customClass = 'mainNav';
  public isFirstOpen = false;

  public mainList: any[];
  // private routeTable = routeTable;

  constructor(private getList: GetMainNavbarItemsService,
              private router: Router,
  ) {}

  ngOnInit() {
    this.mainList = this.getList.mainList;
  }

  listInfo(tableId: number, listId: number){
    // get current route
    const routeLink = `/navbar/navbar${tableId * 10 + listId}`;
    console.log(`子路由跳转到：${routeLink}`);
    this.router.navigate([routeLink]);
  }

}
