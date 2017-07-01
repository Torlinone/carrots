/*
* 数据从服务器获得，这里暂时写死
* */

import { Injectable } from '@angular/core';

const mainList: any[] = [
  // {name: '信息管理', tableId: 1, list: {name: ['信息展示', '信息列表'], listId: 1}},
  {name: '信息管理', tableId: 1, list: [{name: '信息展示', listId: 1}, {name: '信息列表', listId: 2}]},
  {name: '文章管理', tableId: 2, list: [{name: '文章列表', listId: 1}, {name: '文章文章', listId: 2}]},
  {name: '人才管理', tableId: 3, list: [{name: '新增人才', listId: 1}, {name: '删除人才', listId: 2}]},
  {name: '推荐管理', tableId: 4, list: [{name: '这是什么', listId: 1}, {name: '你行你猜', listId: 2}]},
  {name: '后台管理', tableId: 5, list: [{name: '炸了后台', listId: 1}, {name: '你不敢炸', listId: 2}]},
  {name: '用户管理', tableId: 6, list: [{name: '新增用户', listId: 1}, {name: '删除用户', listId: 2}, {name: '清空用户', listId: 3}]},
  {name: '内容管理', tableId: 7, list: [{name: '删了它吧', listId: 1}, {name: '你不敢删', listId: 2}]},
];


@Injectable()
export class GetMainNavbarItemsService {

  public mainList: any[] = mainList;
  constructor() { }

  // 如果需要转换数据格式的话
  // changeFormat(){
  // }

}
