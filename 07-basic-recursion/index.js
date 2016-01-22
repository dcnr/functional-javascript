function reduce(arr, fn, initial) {
  'use strict';
  arr = arr.slice();

  return arr.length
    ? reduce(arr.splice(1), fn, fn(initial, arr[0]))
    : initial;
}


module.exports = reduce;
