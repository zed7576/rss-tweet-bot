'use strict';

const util = require('util');
const makeRandom = require('make-random');
const dayChange = require('daychange');
const rssResultsHelper = require('./rss-results-helper');
const getRandomArrayItem = require('./get-random-array-item');

function searchRss(feed, rss, callback) {
  let date;
  if (rss.daysBack) {
    date = dayChange.sub(rss.daysBack, 'iso').substring(0, 10);
  } else {
    date = '0000-00-00';
  }

  feed(getRandomArrayItem(rss.feeds), (error, articles) => {
    if (error) {
      return callback(error, null);
    } else {
      return callback(null, getRandomArrayItem(rssResultsHelper(date, articles)));
    }
  });
}

module.exports = searchRss;
