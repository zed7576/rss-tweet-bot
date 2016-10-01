'use strict';

function rssResultsHelper(date, results) {
  let parsedResults = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i].published.toJSON().substring(0, 10) >= date) {
      parsedResults.push({
        date:  results[i].published.toJSON().substring(0, 10),
        title: results[i].title,
        link:  results[i].link
      });
    }
  }
  if (parsedResults.length === 0) {
    return new Error(`No results match 'date' criteria`);
  } else {
    return parsedResults;
  }
}

module.exports = rssResultsHelper;
