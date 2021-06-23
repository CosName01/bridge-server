const mongoose = require('mongoose');

const { Schema } = mongoose;
const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    length: 11
  },
  key: {
    type: String
  }
}, {
  collection: 'users', // 这里是为了避免新建的表会带上 s 后缀
  versionKey: false // 不需要 __v 字段，默认是加上的
});

mongoose.set('useCreateIndex', true);
module.exports = mongoose.model('users', usersSchema);
