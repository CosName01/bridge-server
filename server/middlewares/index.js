const koaBody = require('koa-bodyparser');
const koaCors = require('@koa/cors');

const router = require('../routes');
const response = require('./response');
const error = require('./error');
const log = require('./log');

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

// 跨域
const mdCors = koaCors({
  origin: '*',
  credentials: true,
  allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH']
});

// 记录日志
const mdLogger = log();

// 返回处理
const mdResHandler = response();

// 错误处理
const mdErrorHandler = error();

// 路由处理
const mdRoute = router.routes();
const mdRouterAllowed = router.allowedMethods();

module.exports = [
  mdKoaBody,
  mdCors,
  mdLogger,
  mdResHandler,
  mdErrorHandler,
  mdRoute,
  mdRouterAllowed
];
