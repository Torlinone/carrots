import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { selectData} from '../model/from-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public selectData: any = selectData;
  public emptyData: any;

  // public searchTextCache: string;

  @Output() searchText: EventEmitter<URLSearchParams> = new EventEmitter();


  // Data declare
  public fromShown = false;
  public toShown = false;
  public dt: Date = new Date();
  public dtf: Date;
  public dtt: Date;

  // input binding var
  public typeValue;
  public statusValue;

  constructor() {}

  public getDate(): number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  public today(): void {
    this.dtf = new Date();
    this.dtt = new Date();
  }

  public setFrom() {
    this.fromShown = false;
  }

  public setTo() {
    this.toShown = false;
  }

  public clearInput() {
    this.dtf = null;
    this.dtt = null;
    this.typeValue = '';
    this.statusValue = '';
  }

/**
 * 整理搜索条件
 * */
  private sortData(form): URLSearchParams {


  //
  // let searchData: string = '';
  //
  // searchData += form.type ? `type=${form.type}` : '';
  // searchData += (form.status) ? (searchData ? `&status=${form.status}` : `status=${form.status}`) : '';
  // searchData += (this.dtf) ? (searchData ? `&createAt=${this.dtf.valueOf()}` : `createAt=${this.dtf.valueOf()}`) : '';
  // searchData += (this.dtt) ? (searchData ? `&updateAt=${this.dtt.valueOf()}` : `updateAt=${this.dtt.valueOf()}`) : '';

  // console.log(`搜索参数为：${searchData}`);
  //
  // return searchData;

  let params = new URLSearchParams();

  form.type ? params.set('type', form.type) : '';
  form.status ? params.set('status', form.status) : '';
  this.dtf ? params.set('startAt', String(this.dtf.valueOf())) : '';
  this.dtt ? params.set('endAt', String(this.dtt.valueOf())) : '';

  // console.log(`searchText in searchComponent is ${String(params)}`);
  return params;

  }

  public goSearch(formData): void {

    // this.searchTextCache = this.sortData(formData);

    this.searchText.emit(this.sortData(formData));

  }

  ngOnInit() {
    this.emptyData = '';
  }

}
