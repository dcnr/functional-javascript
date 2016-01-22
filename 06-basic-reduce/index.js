function countWords(inputWords) {
  'use strict';

  return inputWords.reduce((newObj, word) => {
    if (newObj[word]) {
      newObj[word]++;
    }
    else {
      newObj[word] = 1;
    }

    return newObj;
  }, {});
}


module.exports = countWords;
