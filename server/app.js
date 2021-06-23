const Koa = require('koa');

const compose = require('koa-compose');
const config = require('../config');
const utils = require('./common/utils');
const MD = require('./middlewares');
const initMongoose = require('./db');

const { host, port } = require('../config');

// 连接数据库
initMongoose();

const app = new Koa();

app.context.config = config;
app.context.utils = utils;

// 引入中间件
app.use(compose(MD));

// koa 错误处理
app.on('error', (err, ctx) => {
  if (ctx) {
    ctx.body = {
      code: -1,
      message: `程序运行时报错：${err.message}`
    };
  }
});

app.use(async ctx => {
  ctx.body = 'hello world1';
});

app.listen(port, host, () => {
  console.log(`API server listening on http://${host}:${port}`);
});
