function logger(namespace) {
  'use strict';

  return function () {
    const args = Array.apply(null, new Array(arguments.length));
    for (let i = 0; i < arguments.length; ++i) {
      args[i] = arguments[i];
    }

    return console.log.apply(null, [namespace, ...args]);
  };
}


module.exports = logger;
