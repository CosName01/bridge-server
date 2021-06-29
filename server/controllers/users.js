const { UsersModel } = require('../models');

const query_user = async ctx => {
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

const user_login = async ctx => {
  const { name, password } = ctx.request.body;
  const filter = {
    name
  };
  try {
    const list = await UsersModel.find(filter, { name: 1, _id: 1, password: 1 });
    if (list.length > 0) {
      if (list[0].password === password) {
        ctx.body = {
          username: list[0].name,
          user_id: list[0]._id
        };
      } else {
        ctx.utils.throwError(400, '密码错误');
      }
    } else {
      ctx.utils.throwError(400, '用户不存在');
    }
  } catch (err) {
    ctx.utils.throwError(-1, err);
  }
};

const register_user = async ctx => {
  const { name, password, phone } = ctx.request.body;
  const user = new UsersModel({
    name, password, phone
  });
  try {
    const { name, _id } = await user.save();
    ctx.body = {
      username: name,
      user_id: _id
    };
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
  try {
    await UsersModel.updateOne(where, update);
    ctx.body = '';
  } catch (err) {
    ctx.utils.throwError(-1, err);
  }
};

module.exports = {
  query_user,
  user_login,
  register_user,
  update_user
};
