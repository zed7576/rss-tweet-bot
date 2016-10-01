'use strict';

const chai = require('chai');
const expect = chai.expect;

const TwitStub = require('./stubs/twit-stub');
const shareTweet = require('./../lib/share-tweet');

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

const twitter = new TwitStub(options);
const tweet = options.twitter.tweet;

describe(`shareTweet function`, () => {
  it(`Should return a string`, () => {
    let result;
    let item = {
      date: '2016-01-01',
      title: 'Title',
      link: 'http://t.co/12345678901'
    };
    shareTweet(twitter, tweet, item, data => result = data);
    expect(result).to.be.a('string');
  });
  it(`Should truncate lengthy tweets`, () => {
    let result;
    let item = {
      date: '2016-01-01',
      title: 'This is an incredibly long title that we want to make sure gets properly truncated, as it is clearly going over the character limit!',
      link: 'http://t.co/12345678901'
    };
    shareTweet(twitter, tweet, item, data => result = data);
    expect(result.length).to.be.at.most(172);
  });
});
