'use strict';

const chai = require('chai');
const expect = chai.expect;

const rssResultsHelper = require('./../lib/rss-results-helper');

const testResults = [
  { title: 'Article 1',
    content: 'This is the body.',
    published: new Date(),
    author: 'John Smith',
    link: 'https://www.example.com/article1',
    feed: {
      source: 'https://www.example.com/rss',
      link: 'https://www.example.com',
      name: 'Example'
    }
  },
  { title: 'Article 2',
    content: 'This is the body.',
    published: new Date(),
    author: 'John Smith',
    link: 'https://www.example.com/article2',
    feed: {
      source: 'https://www.example.com/rss',
      link: 'https://www.example.com',
      name: 'Example'
    }
  },
  { title: 'Article 3',
    content: 'This is the body.',
    published: new Date(),
    author: 'John Smith',
    link: 'https://www.example.com/article3',
    feed: {
      source: 'https://www.example.com/rss',
      link: 'https://www.example.com',
      name: 'Example'
    }
  },
];

describe(`rssResultsHelper function`, () => {
  it(`Should return an array`, () => {
    expect(rssResultsHelper('2015-12-31', testResults)).to.be.instanceof(Array);
  });
  it(`Should return an array length equal to results.length`, () => {
    expect(rssResultsHelper('2015-12-31', testResults).length).to.equal(testResults.length);
  });
  it(`Should return an error`, () => {
    // Set a future date as a parameter to return an error
    let now = new Date();
    let future = new Date(now);
    future.setDate(now.getDate() + 365);
    expect(rssResultsHelper(future.toJSON().substring(0, 10), testResults)).to.be.an('error');
  });
  it(`Should return an array of objects with properties 'date', 'title, 'link'`, () => {
    expect(rssResultsHelper('2015-12-31', testResults)[0]).to.have.property('date');
    expect(rssResultsHelper('2015-12-31', testResults)[0]).to.have.property('title');
    expect(rssResultsHelper('2015-12-31', testResults)[0]).to.have.property('link');
  });
});
