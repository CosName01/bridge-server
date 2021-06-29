const moment = require('moment');

const { EnvsModel } = require('../models');

const query_env = async ctx => {
  let filter = {};
  const { id } = ctx.request.query;
  if (id) {
    filter = {
      _id: id
    };
  }
  const list = await EnvsModel.find(filter, {}).sort({ updateTime: -1 });
  // list.forEach(item => {
  //   item.createdTime = moment(item).utcOffset(8).format('YYYY-MM-DD HH:mm:ss');
  //   item.updatedTime = moment(item).utcOffset(8).format('YYYY-MM-DD HH:mm:ss');
  // });
  // console.log(list);
  ctx.body = list;
};

const update_env = async ctx => {
  const { branchUser, mobileBranchUser, feBranchUser, id } = ctx.request.body;
  const where = { _id: id };
  let update = {
    branchUser,
    mobileBranchUser,
    feBranchUser,
    updateTime: moment().require()
  };
  update = ctx.utils.removeEmpty(update);
  try {
    await EnvsModel.updateOne(where, update);
    ctx.body = '';
  } catch (err) {
    ctx.utils.throwError(-1, err);
  }
};

const insertOne = async(target, data) => {
  const result = await target.findOne({ index: data.index });
  if (result) {
    await target.updateOne({ index: data.index }, { $set: data });
  } else {
    await target.create(data);
  }
};

const initEnv = async envList => {
  envList.forEach(async item => {
    try {
      await insertOne(EnvsModel, item);
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = {
  query_env,
  update_env,
  initEnv
};
