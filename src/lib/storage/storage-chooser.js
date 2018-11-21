'use strict';

import mem from './memory.js';
import file from './file.js';

let storageType = {};

switch(process.env.STORAGE) {
case 'file':
  storageType = file;
  break;
case 'mem':
  storageType = mem;
  break;
default:
  storageType = mem;
  break;
}

export default storageType;