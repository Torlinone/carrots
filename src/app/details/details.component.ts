import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {detailTittle, httpList} from '../model/from-model';
import {GetDataService} from '../data-service/get-data.service';
import {URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';
import {PutDataService} from '../data-service/put-data.service';
import {Observable} from 'rxjs/Observable';
import {DeleteDataService} from '../data-service/delete-data.service';

const ADD_ARTICLE = '/navbar/add-article';
const CHANGE = '/carrots-admin-ajax/a/u/article/status';
const DELETE_URL = '/carrots-admin-ajax/a/u/article/';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  searchText: URLSearchParams;

  // list var
  public detailTittle = detailTittle;
  public articleList: any;
  private getArticle: any;

  private deleteArticle: any = new Observable();

  // put var
  public putMsg: any;
  public put: any = new Observable();

  // pagination var
  public maxSize = 5;
  public bigTotalItems = 60;
  public bigCurrentPage = 1;
  public numPages = 0;
  public firsText = '首页';
  public lastText = '末页';
  public previousText = '向前';
  public nextText = '向后';

  // modal var
  public statusDisplay: number;
  private indexCache: number;
  private modalCache: any;

  constructor(private getService: GetDataService,
              private router: Router,
              private putService: PutDataService,
              private deleteService: DeleteDataService) {

  }

  /**
   * pagination component ------------------------------------------------------------------------------
   * */
  // update page in searchText & goSearch()
  private updatePage(page: number): void {

    if (page) {
      !this.searchText ? this.searchText = new URLSearchParams() : '';
      this.searchText.set('page', String(page));
      this.goSearch();
      this.updateTotalPage();
    }
  }

  // update listSize in searchText & goSearch()
  public updateListSize(listSize: number) {

    console.log('this listSize is : ' + listSize);
    if (listSize) {
      !this.searchText ? this.searchText = new URLSearchParams() : '';
      this.searchText.set('size', String(listSize));
      this.goSearch();
      this.updateTotalPage();
    }
  }

  // listening page changes
  public pageChanged(event: any): void {

    // console.log('Page changed to: ' + event.page);
    // console.log('Number items per page: ' + event.itemsPerPage);
    // add page params
    this.updatePage(event.page);
  }

  // 更新总页数
  private updateTotalPage() {
    if (this.articleList){
      this.bigTotalItems = this.articleList.data.total / this.articleList.data.size * 10;
    }
    console.log('总页码更新为：' + this.bigTotalItems / 10);
  }

  // input to change page
  public setPage(pageNo: number): void {
    pageNo ?  this.bigCurrentPage = pageNo : '';
  }



  /**
   * http get method */
  // http -----> get
  private goSearch() {
    this.getArticle = this.getService.getData(httpList.get.pullArticle, this.searchText)
      .subscribe(data => {this.articleList = data;
      // console.log(this.articleList);
      });
  }

  /**
   * delete article / http delete method ------------------------------------------------------------------------------
   * */

  // http -------> delete
  public doDeleteArticle(i: number) {
    let id: number = this.articleList.data.articleList[i].id;
    let deleteRes;

    // console.log(`this ${id}th item will bo delete`);

    this.deleteArticle = this.deleteService.deleteData(DELETE_URL, id).subscribe(res => {
      deleteRes = res;
      // console.log('got deleteService data is : ');
      // console.log(deleteRes);
      this.deleteResponse(deleteRes);
    });
  }

  private deleteResponse(deleteRes): void {
    if (deleteRes) {
      deleteRes.message === 'success' ? this.deleteSuccess() : this.deleteFailed();
    }
  }

  private deleteSuccess() {
    console.log('delete competed !');
    this.goSearch();
  }

  private deleteFailed() {
    console.log('delete failed !');
  }



  // jump to AddArticleComponent
  public addArticle(): void {
    this.router.navigate([ADD_ARTICLE, -1]);
  }


  /**
   * let article online or offline
   * http put method ------------------------------------------------------------------------------
   * */

  public changeStatus(): void {

    let i = this.indexCache;
    let ii = this.articleList.data.articleList[i];
    ii.status === 2 ? this.letOffline(ii) : this.letOnline(ii);
  }


  // set put params status = 2 $ putData() //  '1' draft / '2' online
  public letOnline(ii: any): void {

    let putText: URLSearchParams = new URLSearchParams();
    putText.set('id', String(ii.id));
    putText.set('status', '2');
    this.putData(putText);

    console.log('online finished');
  }

  // set put params status = 2 $ putData() //  '1' draft / '2' online
  public letOffline(ii: any): void {

    let putText: URLSearchParams = new URLSearchParams();
    putText.set('id', String(ii.id));
    putText.set('status', '1');
    this.putData(putText);

    console.log('offline finished');
  }

  // http --> put
  private putData(putText: URLSearchParams) {

    // console.log('putting response is : ');
    // console.log(String(putText));

    this.put = this.putService.putData(CHANGE, putText)
      .subscribe(res => {this.putMsg = res;
          // console.log('got putService data is : ');
          // console.log(this.putMsg);
        this.putFinish();
      });

  }

  private putFinish() {
    if (this.putMsg) {
      // console.log('修改状态是否成功 ：' + this.putMsg.message);
      this.putMsg.message === 'success' ? this.putSuccess() : this.putFailed();
    }
  }

  private putSuccess(): void {

    this.modalCache.hide();
    this.goSearch();

    console.log('put success');
  }

  private putFailed(): void {
    console.log('put failed');
  }

  public thisId(i: number): number {
    return  this.articleList.data.articleList[i].id;
  }

  /**
   * alert message / online/offline table ------------------------------------------------------------------------------
   * */

  public alertMsg(i: number, modal) {

    console.log('选择的是 ：' + i + 1);

    // save index in global var
    this.indexCache = i;
    this.modalCache = modal;

    let ii = this.articleList.data.articleList[i];
    // chang template display
    this.statusDisplay =  (ii.status == 1) ? 2 : 1;

    modal.show();
  }


  public imNotSure(): void {
    this.modalCache.hide();
  }

  public imSure(): void {
    this.changeStatus();
  }


  ngOnInit() {
  }

  ngOnChanges() {
    this.getArticle = this.getService.getData(httpList.get.pullArticle, this.searchText)
      .subscribe(data => {this.articleList = data;
      // console.log('got GetDataService response is : ');
      // console.log(this.articleList);
      });
    this.updateTotalPage();
  }

  ngOnDestroy() {
    this.getArticle.unsubscribe();
    // this.put.unsubscribe();
    // this.deleteArticle.unsubscribe();
  }
}
