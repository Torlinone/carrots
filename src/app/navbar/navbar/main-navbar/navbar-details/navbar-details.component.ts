import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-details',
  templateUrl: './navbar-details.component.html',
  styleUrls: ['./navbar-details.component.css']
})
export class NavbarDetailsComponent implements OnInit {

  public searchText: URLSearchParams;

  constructor() { }

  public getSearchText(event: URLSearchParams) {
    this.searchText = event;
    console.log(`searchText in NavbarDetailsComponent is :${this.searchText}`);
  }

  ngOnInit() {
  }

}
