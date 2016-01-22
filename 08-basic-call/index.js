function duckCount() {
  'use strict';

  return Array.prototype.filter.call(arguments, (obj) =>
    Array.prototype.hasOwnProperty.call(obj, 'quack')
  ).length;
}


module.exports = duckCount;
