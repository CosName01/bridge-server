const mongoose = require('mongoose');
const { url, name } = require('../config').db;

const db = mongoose.connection;
async function initMongoose() {
  const target = url.substr(-1) === '/' ? `${url}${name}` : `${url}/${name}`;
  mongoose.connect(target, { useNewUrlParser: true, useUnifiedTopology: true });
  db.on('error', console.error.bind(console, '❌ Connection error:'));
  db.once('open', () => {
    console.log(`🔗 Connection Open to: ${target}`);
  });
  db.once('disconnected', () => {
    console.log(' Connection disconnected.');
  });
}
module.exports = initMongoose;
