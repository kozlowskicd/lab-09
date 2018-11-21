'use strict';

import requireDir from 'require-dir';
const models = requireDir('../models');

export default (request, response, next) => {
  let model = request.params.model;
  if(model && models[model] && models[model].default) {
    request.model = models[model].default;
    next();
  }
  else {
    next('Model not Found: ', models[model]);
  }
};