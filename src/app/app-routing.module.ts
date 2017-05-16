/**
 * Created by Keriy on 2017/5/27.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {TopNavbarComponent} from "./navbar/navbar/top-navbar/top-navbar.component";
import {MainNavbarComponent} from "./navbar/navbar/main-navbar/main-navbar.component";
import {Code404Component} from "app/code404/code404.component";
import {NavbarComponent} from "./navbar/navbar/navbar.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {NavbarDetailsComponent} from "./navbar/navbar/main-navbar/navbar-details/navbar-details.component";
import {AddArticleComponent} from "./add-article/add-article.component";
import {TinyEditComponent} from "./tiny-edit/tiny-edit.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: "navbar",
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'navbar21', component: NavbarDetailsComponent},
      {path: 'navbar11', component: TinyEditComponent},
      {path: 'add-article/:id', component: AddArticleComponent},
      {path: '**', component: Code404Component},
    ]
  },
  {
    path: 'top-navbar',
    component: TopNavbarComponent,
  },
  {
    path: 'main-navbar',
    component: MainNavbarComponent,
  },
  {
    path: '**',
    component: Code404Component,
  },
];

@NgModule ({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
}
