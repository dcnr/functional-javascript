function repeat(operation, num) {
  'use strict';

  while (num--) {
    operation();
  }
}


module.exports = repeat;
