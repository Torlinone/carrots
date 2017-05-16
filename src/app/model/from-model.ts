/**
 * Created by Keriy on 2017/6/2.
 */
export let searchFromData = {

  navbar11: [
    {header: '公司名称', type: 'text', label: 'company',name: 'company'},
  ]

};

export let selectData = {
  statueOne: [
    {value: 'AStatue', code: '0', display: 'A轮'},
    {value: 'BStatue', code: '1', display: 'B轮'},
    {value: 'CStatue', code: '2', display: 'C轮'},
    {value: 'DStatue', code: '3', display: 'D轮'},
  ],
  years: [
    {value: '0', code: '',  display: '全部'},
    {value: '1', code: '1', display: '1 ~ 3年'},
    {value: '3', code: '2', display: '3 ~ 5年'},
    {value: '5', code: '3', display: '5 ~ 8年'},
    {value: '8', code: '4', display: '8年以上'},
  ],
  type: [
    {value: 'index',    code: '',  display: '全部'},
    {value: 'index',    code: '0', display: '首页banner'},
    {value: 'jobs',     code: '1', display: '找职位banner'},
    {value: 'elites',   code: '2', display: '找精英banner'},
    {value: 'industry', code: '3', display: '行业大图'},
  ],
  industry: [
    {value: 'all',                code: '',  display: '全部'},
    {value: 'internet',           code: '0', display: '移动互联网'},
    {value: 'eCommerce',          code: '1', display: '电子商务'},
    {value: 'enterpriseService',  code: '2', display: '企业服务'},
    {value: 'O2O',                code: '3', display: 'O2O'},
    {value: 'education',          code: '4', display: '教育'},
    {value: 'game',               code: '5', display: '游戏'},
    {value: 'finance',            code: '6', display: '金融'},
  ],
  status: [
    {value: 'all',    code: '',  display: '全部'},
    {value: 'online', code: '1', display: '草稿'},
    {value: 'draft',  code: '2', display: '上线'},
  ],
};


export let addArticleSelect = {
  type: [
    {value: 'index',    code: '',  display: '请选择'},
    {value: 'index',    code: '0', display: '首页banner'},
    {value: 'jobs',     code: '1', display: '找职位banner'},
    {value: 'elites',   code: '2', display: '找精英banner'},
    {value: 'industry', code: '3', display: '行业大图'},
  ],
  industry: [
    {value: 'all',                code: '',  display: '全部'},
    {value: 'internet',           code: '0', display: '移动互联网'},
    {value: 'eCommerce',          code: '1', display: '电子商务'},
    {value: 'enterpriseService',  code: '2', display: '企业服务'},
    {value: 'O2O',                code: '3', display: 'O2O'},
    {value: 'education',          code: '4', display: '教育'},
    {value: 'game',               code: '5', display: '游戏'},
    {value: 'finance',            code: '6', display: '金融'},
  ],
};


// detail.component.ts 标题
export let detailTittle = {
  article: ['ID', '名称', '类型', '发布时间', '修改时间', '发布者', '状态', '操作'],
};


export let httpList = {
  get: {
    pullArticle:  '/carrots-admin-ajax/a/article/search',
  },
  post: {
    addArticle: '/carrots-admin-ajax/a/u/article',
    addImg: '/carrots-admin-ajax/a/u/img/task'
  },
  put: {
    editArticle: '/carrots-admin-ajax/a/u/article/{id}'
  },
  // delete为关键字，所以用delete1
  delete1: {
    deleteArticle: '/carrots-admin-ajax/a/u/article/{id}'
  }
};
