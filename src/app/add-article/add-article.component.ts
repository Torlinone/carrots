import {Component, EventEmitter, OnDestroy, OnInit, Output}   from      '@angular/core';
import {addArticleSelect, httpList}     from      '../model/from-model';
import {AddDataService}                 from      '../data-service/add-data.service';
import {URLSearchParams}                from      '@angular/http'
import {FileUploader}                   from      'ng2-file-upload';
import {ActivatedRoute, Router}         from      '@angular/router';
import {GetDataService} from "../data-service/get-data.service";
import {Observable} from "rxjs/Observable";


const URL = httpList.post.addArticle;
const URL_IMG = httpList.post.addImg;
const URL_GO_BACK = '/navbar/navbar21';

const ADD_TITLE = '新增 Article';
const EDIT_TITLE = '编辑 Article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit, OnDestroy {

  private getUrl = '/carrots-admin-ajax/a/article/';


  // component var
  public selectOption = addArticleSelect;
  public componentTitle = '新增 Article';
  public feedBack: any;
  private postService: any;
  private articleId: number;
  public articleData: any;

  //http var
  public postText: URLSearchParams = new URLSearchParams();
  private postRes: any;

  // file uploader var
  public uploader: FileUploader = new FileUploader({url: URL_IMG, method: 'POST', removeAfterUpload: true, isHTML5: true});
  public hasBaseDropZoneOver = false;

  // forms binding var
  public setTitle: string;
  public setType: number | string;
  public setIndustry: number | string = 0;
  public setContent: string;
  public setUrl: string;
  public setImg: string;

  // for form valid
  public imgStatus = true;


  // TinyMCE var
  @Output()
  mceContent = new EventEmitter();
  public mceText = '请输入内容';

  // get article-service var
  private getData: any = new Observable();
  private gotId: any = new Observable();


  constructor(private addService: AddDataService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private getArticle: GetDataService) {

    this.gotId = this.activatedRoute.params.subscribe(params => this.articleId = params['id']);
    // console.log(`add-article-component get route id is : ${this.articleId}`);
    this.initData();

  }

  /**
   * get route params
   * */
  private initData() {

    this.initComponentTitle();

    if (this.articleId > 0) {
      this.getArticleById();
    }
  }


  private initComponentTitle() {
    this.componentTitle =  (this.articleId > 0) ? EDIT_TITLE : ADD_TITLE;
  }

  // init getUrl
  private initGetUrl(): void {
    this.getUrl += (this.articleId > 0) ? this.articleId : '';
    // console.log(`current http get url is : ${this.getUrl}`);
  }


  private getArticleById() {
    this.initGetUrl();
    this.getData = this.getArticle.getData(this.getUrl).subscribe(res => {
      this.articleData = res;
      this.initDisplayData();
    });
  }


  private initDisplayData() {

    if (this.articleData.message === 'success') {

      let thisData = this.articleData.data.article;
      this.setTitle = thisData.title;
      this.setType = thisData.type;
      this.setContent = thisData.content;
      this.setUrl = thisData.url;
      this.setImg = thisData.img;

      this.mceText = thisData.content;
    }
  }


  /**
   * file upload process
   * */
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  // upload main fun
  public upload(i) {
    this.uploader.queue[i].upload();
    this.uploader.queue[i].onSuccess = (response, status) => {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        this.feedBack = JSON.parse(response);

        if(this.feedBack.message === 'success') {
          this.setImg = this.feedBack.data.url;
          this.imgStatus = true;
        } else {
          this.imgStatus = false;
        }
        // console.log(this.feedBack);
      }else {
        // 上传文件后获取服务器返回的数据错误
        console.log('upload error！');
      }
    };
  }

  /**
   * input process fun
   * */

  // save values of input into postText
  private setPostText() {
    this.postText.set('title', this.setTitle);
    this.postText.set('type', String(this.setType));
    this.setIndustry ? this.postText.set('industry', String(this.setIndustry)) : '';
    this.postText.set('url', this.setUrl);
    this.postText.set('img', this.setImg);
  }

  // set status: online & pushArticle
  public pushOnline() {
    this.setPostText();
    this.postText.set('status', '2');
    this.pushArticle(this.postText);


  }

  // set status: draft & pushArticle
  public pushDraft() {
    this.postText.set('status', '1');
    this.setPostText();
    this.pushArticle(this.postText);

    this.finishPost();
  }

  // post article (include img-url)
  private pushArticle(content: URLSearchParams): any {
    this.postService = this.addService.postData(URL, content).subscribe(data => {
      this.postRes = data;

      this.finishPost();
      // console.log(String(data));
    });
  }

  // Article post finished
  private finishPost(): void{

    console.log(`this msg is ${String(this.postRes)}`);
    if (this.postRes) {
      this.postRes.message === 'success' ? this.postSuccess() : this.postFailed();
    }
  }

  private postSuccess() {
    this.router.navigate([URL_GO_BACK]);
    console.log('post success!');
  }

  public cancel_() {
    this.router.navigate([URL_GO_BACK]);
  }

  private postFailed() {
    console.log('post failed!');
  }

  public clearInput() {
    this.setTitle = '';
    this.setType = '';
    this.setContent = '';
    this.setUrl = '';
    this.setImg = '';
  }

  // Tiny MCE

  public keyupHandler(event: any) {
    console.log(event);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.gotId.unsubscribe();
  }

}
