const query_list = async ctx => {
  ctx.body = 'user_list';
};
const register_user = async ctx => {
  const { name, password } = ctx.request.body;
  ctx.body = {
    type: 'register_user',
    data: {
      name,
      password
    }
  };
};

module.exports = {
  query_list,
  register_user
};
