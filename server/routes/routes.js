const { users } = require('../controllers');

const routes = [
  {
    //  测试
    method: 'get',
    path: '/query_list',
    controller: users.query_list
  },
  {
    //  测试
    method: 'post',
    path: '/register_user',
    controller: users.register_user
  }
];

module.exports = routes;
