const Joi = require('@hapi/joi');

const register_user = {
  body: Joi.object({
    name: Joi.string().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  })
};

module.exports = {
  register_user
};
