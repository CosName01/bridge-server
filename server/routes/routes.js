const userRoutes = require('./users');
const envRoutes = require('./envs');

const routes = [].concat(userRoutes, envRoutes);

module.exports = routes;
