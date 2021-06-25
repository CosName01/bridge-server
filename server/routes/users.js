const { users } = require('../controllers');
const { scmUsers } = require('../schema');

const { register_user, query_user, update_user } = users;
const userRoutes = [
  {
    //  测试
    method: 'get',
    path: '/query_user',
    controller: query_user
  },
  {
    method: 'post',
    path: '/register_user',
    valid: scmUsers.register_user,
    controller: register_user
  },
  {
    method: 'post',
    path: '/update_user',
    valid: scmUsers.update_user,
    controller: update_user
  }
];

module.exports = userRoutes;
