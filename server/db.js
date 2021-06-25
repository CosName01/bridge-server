const mongoose = require('mongoose');

const { EnvsModel } = require('./models');
const { url, name } = require('../config').db;
const { initEnv } = require('./controllers/envs');
const envMap = require('./common/all-env-map');

const db = mongoose.connection;
async function initMongoose() {
  const target = url.substr(-1) === '/' ? `${url}${name}` : `${url}/${name}`;
  mongoose.connect(target, { useNewUrlParser: true, useUnifiedTopology: true });
  db.on('error', console.error.bind(console, '❌ Connection error:'));
  db.once('open', async() => {
    console.log(`🔗 Connection Open to: ${target}`);
    // 初始化
    await initEnv(envMap);
  });
  db.once('disconnected', () => {
    console.log(' Connection disconnected.');
  });
}
module.exports = initMongoose;
