'use strict';

const Twit = require('twit');
const feedRead = require('feed-read');
const dayChange = require('daychange');
const searchRss = require('./search-rss');
const shareTweet = require('./share-tweet');

class RssTweetBot {
  constructor(options) {
    if (typeof options !== 'object') {
      throw new TypeError(`'Options' argument must be an object.`);
    }
    this.rss = options.rss;
    this.feed = feedRead;
    this.twitter = new Twit(options.twitter.keys);
    this.tweet = options.twitter.tweet;
  }
  tweetRandomLink(callback) {
    searchRss(this.feed, this.rss, (error, data) => {
      if (error) {
        return callback(error);
      } else {
        shareTweet(this.twitter, this.tweet, data, (error, result) => {
          if (error) {
            return callback(error);
          } else {
            return callback(result);
          }
        });
      }
    });
  }
}

module.exports = RssTweetBot;
