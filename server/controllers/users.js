const { UsersModel } = require('../models');

const query_list = async ctx => {
  const list = await UsersModel.find({}, { name: 1, _id: 1, phone: 1 });
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

module.exports = {
  query_list,
  register_user
};
