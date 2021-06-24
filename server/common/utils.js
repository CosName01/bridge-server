const assert = require('assert');
const lodash = require('lodash');

const throwError = (code, message) => {
  const err = new Error(message);
  err.code = code;
  throw err;
};

const removeEmpty = source => {
  let _source = lodash.cloneDeep(source);
  if (Array.isArray(_source)) {
    _source = _source.filter(s => s);
  } else {
    Object.keys(_source).forEach(key => {
      if (!_source[key]) {
        delete _source[key];
      }
    });
  }
  return _source;
};

module.exports = {
  assert,
  throwError,
  removeEmpty
};
