const Joi = require('@hapi/joi');

const register_user = {
  body: Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
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
