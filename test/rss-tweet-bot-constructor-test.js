'use strict';

const chai = require('chai');
const expect = chai.expect;

const RssTweetBot = require('../lib/rss-tweet-bot');

describe('RssTweetBot constructor function', () => {
  it(`Should only accept an object as its only argument`, () => {
    expect(() => new RssTweetBot()).to.throw(TypeError);
    expect(() => new RssTweetBot(123)).to.throw(TypeError);
    expect(() => new RssTweetBot('test')).to.throw(TypeError);
    expect(() => new RssTweetBot(false)).to.throw(TypeError);
    expect(() => new RssTweetBot(() => {})).to.throw(TypeError);
  });
});
