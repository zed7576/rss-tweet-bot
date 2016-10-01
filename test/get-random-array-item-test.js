'use strict';

const chai = require('chai');
const expect = chai.expect;

const getRandomArrayItem = require('./../lib/get-random-array-item');

describe(`getRandomArrayItem function`, () => {
  it(`Should return an item from an array`, () => {
    let arrayItems = [1, 2, 3];
    expect(getRandomArrayItem(arrayItems)).to.be.at.most(3);
  });
});
