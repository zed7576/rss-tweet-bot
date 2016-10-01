'use strict';

const chai = require('chai');
const expect = chai.expect;

const feedReadStub = require('./stubs/feed-read-stub');
const searchRss = require('./../lib/search-rss');

const options = {
  rss: {
    feeds: [
      'https://www.exampleTwo.com/feed/rss',
      'https://www.exampleTwo.com/feed/rss'
    ],
    daysBack: 90
  },
  twitter: {
    keys: {
      consumer_key:        'consumer_key',
      consumer_secret:     'consumer_secret',
      access_token:        'access_token',
      access_token_secret: 'access_token_secret'
    },
    tweet: {
      append: '#GoodRead'
    }
  }
};

const feed = feedReadStub;
const rss = options.rss;

describe(`searchRss function`, () => {
  it(`Should return an object`, () => {
    let result;
    searchRss(feed, rss, data => result = data);
    expect(result).to.be.an('object');
  });
  it(`Should return an object with properties 'date', 'title, 'link'`, () => {
    let result;
    searchRss(feed, rss, data => result = data);
    expect(result).to.have.property('date');
    expect(result).to.have.property('title');
    expect(result).to.have.property('link');
  });
});
