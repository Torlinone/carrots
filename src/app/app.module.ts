import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { TopNavbarComponent } from './navbar/navbar/top-navbar/top-navbar.component';
import { MainNavbarComponent } from './navbar/navbar/main-navbar/main-navbar.component';
import { BeSureLoginService } from './navbar/be-sure-login.service';
import { Code404Component } from './code404/code404.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import {GetMainNavbarItemsService} from './navbar/navbar/main-navbar/get-main-navbar-items.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { NavbarDetailsComponent } from './navbar/navbar/main-navbar/navbar-details/navbar-details.component';
import {
  AccordionModule, AlertModule, ButtonsModule, DatepickerModule, ModalModule,
  PaginationModule
} from 'ngx-bootstrap';
import { UploadComponent } from './upload/upload.component';
import { IndustryPipe } from './mypip/industry-pip.pipe';
import {StatusPipe} from './mypip/status.pipe';
import { StatusOperatePipe } from './mypip/status-operate.pipe';
import {GetDataService} from './data-service/get-data.service';
import { TypePipe } from './mypip/type.pipe';
import { AddArticleComponent } from './add-article/add-article.component';
import {AddDataService} from "./data-service/add-data.service";
import {FileUploadModule} from "ng2-file-upload";
import {PutDataService} from "./data-service/put-data.service";
import {DeleteDataService} from "app/data-service/delete-data.service";
import { TinyEditComponent } from './tiny-edit/tiny-edit.component';
import { LightDirective } from './directive/light.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopNavbarComponent,
    MainNavbarComponent,
    Code404Component,
    NavbarComponent,
    WelcomeComponent,
    SearchComponent,
    DetailsComponent,
    NavbarDetailsComponent,
    UploadComponent,
    IndustryPipe,
    StatusPipe,
    StatusOperatePipe,
    TypePipe,
    AddArticleComponent,
    TinyEditComponent,
    LightDirective,
  ],
  imports: [
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    AppRoutingModule,
    FileUploadModule,
  ],
  providers: [
    DeleteDataService,
    PutDataService,
    AddDataService,
    GetDataService,
    LoginService,
    BeSureLoginService,
    GetMainNavbarItemsService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
