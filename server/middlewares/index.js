const koaBody = require('koa-bodyparser');

const router = require('../routes');
const response = require('./response');
const error = require('./error');

// 参数解析
// https://github.com/koajs/bodyparser
const mdKoaBody = koaBody({
  enableTypes: ['json', 'form', 'text', 'xml'],
  formLimit: '56kb',
  jsonLimit: '1mb',
  textLimit: '1mb',
  xmlLimit: '1mb',
  strict: true
});

// 返回处理
const mdResHandler = response();
const mdErrorHandler = error();

// 路由处理
const mdRoute = router.routes();
const mdRouterAllowed = router.allowedMethods();

module.exports = [
  mdKoaBody,
  mdResHandler,
  mdErrorHandler,
  mdRoute,
  mdRouterAllowed
];
