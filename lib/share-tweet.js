'use strict';

function shareTweet(twitter, tweet, item, callback) {
  tweet = tweet || {};
  let link = item.link;
  let text = `"${item.title}"`;
  if (tweet.prepend) {
    text = `${tweet.prepend} ${text}`;
  }
  if (tweet.append) {
    text = `${text} ${tweet.append}`;
  }
  if (text.length > 115) {
    text = text.substring(0, 111);
    text = `${text}... "`;
  }
  twitter.post(`statuses/update`, {status: `${text} ${link}`}, (error, data, response)=> {
    if (error) {
      return callback(error);
    } else {
      return callback(`${data.created_at}: ${data.text}`);
    }
  });
}

module.exports = shareTweet;
