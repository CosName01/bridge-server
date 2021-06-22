const koaRouter = require('koa-router');

// eslint-disable-next-line new-cap
const router = new koaRouter();

const routeList = require('./routes');

routeList.forEach(item => {
  const { method, path, controller } = item;
  //  router 第一个参数是 path， 后面跟上路由级中间件 controller（上面编写的路由处理函数）
  router[method](path, controller);
});

module.exports = router;
