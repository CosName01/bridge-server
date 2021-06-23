const { users } = require('../controllers');
const { scmUsers } = require('../schema');

const routes = [
  {
    //  测试
    method: 'get',
    path: '/query_list',
    controller: users.query_list
  },
  {
    method: 'post',
    path: '/register_user',
    valid: scmUsers.register_user,
    controller: users.register_user
  }
];

module.exports = routes;
