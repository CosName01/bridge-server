const Joi = require('@hapi/joi');

const register_user = {
  body: Joi.object({
    name: Joi.string().pattern(new RegExp('^[-|a-z0-9A-Z._]+@idiaoyan.cn$')).required()
      .error(new Error('用户名需以@idiaoyan.cn结尾')),
    password: Joi.string().pattern(new RegExp('^[-|a-z0-9A-Z._]{3,30}$')).required()
      .error(new Error('密码长度大于3位小于30位，只可以包含大小写字母、数字、下划线、中划线和点')),
    phone: Joi.string().pattern(new RegExp('^[0-9]{11}$'))
  })
};
const update_user = {
  body: Joi.object({
    name: Joi.string().alphanum().min(3).max(30),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    phone: Joi.string().pattern(new RegExp('^[0-9]{11}$')),
    id: Joi.string().required()
  })
};

module.exports = {
  register_user,
  update_user
};
