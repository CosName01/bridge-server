const query_list = async ctx => {
  ctx.body = 'user_list';
};
const register_user = async ctx => {
  ctx.body = {
    type: 'register_user',
    param: ctx.request.body
  };
};

module.exports = {
  query_list,
  register_user
};
