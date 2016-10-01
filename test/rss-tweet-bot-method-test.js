'use strict';

const chai = require('chai');
const expect = chai.expect;

const RssTweetBot = require('../lib/rss-tweet-bot');
const TwitStub = require('./stubs/twit-stub');
const feedReadStub = require('./stubs/feed-read-stub');

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

const testBot = new RssTweetBot(options);

describe('RssTweetBot tweetRandomLink method', () => {
  it(`Should return a string`, () => {
    let result;
    testBot.feed = feedReadStub;
    testBot.twitter = new TwitStub(options);
    testBot.tweetRandomLink(data => result = data);
    expect(result).to.be.a('string');
  });
});
