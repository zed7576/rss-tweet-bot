'use strict';

function feedReadStub(url, callback) {
  let error;
  let articles = [];
  for (let i = 0; i < 20; i++) {
    articles.push({
      title: `title ${i}`,
      author: `author ${i}`,
      link: `link ${i}`,
      content: `content ${i}`,
      published: new Date(),
      feed: `feed ${i}`,
    });
  }
  callback(error, articles);
}

module.exports = feedReadStub;
