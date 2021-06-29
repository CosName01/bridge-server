const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;
const envsSchema = new Schema({
  index: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
    // unique: true
  },
  key: {
    type: String,
    required: true
    // unique: true
  },
  mobileKey: {
    type: String,
    required: true
  },
  feKey: {
    type: String,
    required: true
  },
  branchUser: {
    type: String,
    default(value, options) {
      return 'unKnown';
    }
  },
  mobileBranchUser: {
    type: String,
    default(value, options) {
      return 'unKnown';
    }
  },
  feBranchUser: {
    type: String,
    default(value, options) {
      return 'unKnown';
    }
  },
  link: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: false
  },
  status: {
    type: Number,
    default(value, options) {
      return 1; // 0 失效 1空闲(正常) 2使用中
    }
  },
  remark: {
    type: String || Array,
    required: false
  },
  updateTime: {
    type: String,
    default() {
      return moment().format();
    }
  }
}, {
  collection: 'envs',
  versionKey: false // 不需要 __v 字段，默认是加上的
  // timestamps: {
  //   createdAt: 'createdTime',
  //   updatedAt: 'updatedTime'
  // }
});

mongoose.set('useCreateIndex', true);
module.exports = mongoose.model('envs', envsSchema);
