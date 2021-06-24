const { UsersModel } = require('../models');

const query_list = async ctx => {
  let filter = {};
  const { id } = ctx.request.query;
  if (id) {
    filter = {
      _id: id
    };
  }
  const list = await UsersModel.find(filter, { name: 1, _id: 1, phone: 1 });
  ctx.body = list;
};
const register_user = async ctx => {
  const { name, password, phone } = ctx.request.body;
  const user = new UsersModel({
    name, password, phone
  });
  try {
    await user.save();
    ctx.body = '';
  } catch (err) {
    ctx.utils.throwError(-1, err);
  }
};

const update_user = async ctx => {
  const { name, password, phone, id } = ctx.request.body;
  const where = { _id: id };
  let update = {
    name,
    password,
    phone
  };
  update = ctx.utils.removeEmpty(update);
  console.log(update);
  try {
    await UsersModel.updateOne(where, update);
    ctx.body = '';
  } catch (err) {
    ctx.utils.throwError(-1, err);
  }
};

module.exports = {
  query_list,
  register_user,
  update_user
};
