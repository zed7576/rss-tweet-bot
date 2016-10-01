'use strict';

const makeRandom = require('make-random');

function getRandomArrayItem(array) {
  return array[makeRandom.floor(array.length)];
}

module.exports = getRandomArrayItem;
