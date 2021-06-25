const { envs } = require('../controllers');

const envRoutes = [
  {
    method: 'get',
    path: '/query_env',
    controller: envs.query_env
  },
  {
    method: 'post',
    path: '/update_env',
    controller: envs.update_env
  }
];

module.exports = envRoutes;
