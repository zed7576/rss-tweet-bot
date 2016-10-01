# RSS Tweet Bot

[![Build Status](https://travis-ci.org/johnfoderaro/rss-tweet-bot.svg?branch=master)](https://travis-ci.org/johnfoderaro/rss-tweet-bot)

Rss Tweet Bot is a Node.js module that allows for easily sharing a random tweet containing a link from a set of predefined RSS feeds.

This module is essentially a wrapper around [Twit](https://github.com/ttezel/twit) and [Feed-Read](https://github.com/sentientwaffle/feed-read), offering a streamlined API that helps bridge the gap between these two modules, all while hopefully helping the end user automate the sharing of content on Twitter! 😎

With that said, all of the typical rules and expectations from Twitter's API still applies.

## Getting Started

```shell
npm install rss-tweet-bot
```

## Examples

```javascript
'use strict';

const RssTweetBot = require('rss-tweet-bot');

const exampleBot = new RssTweetBot({
  rss: {
    feeds: [
      'http://www.example1.com/',
      'http://www.example2.com/',
      'http://www.example3.com/',
      'http://www.example4.com/',
      'http://www.example5.com/',
    ],
    daysBack: 90
  },
  twitter: {
    keys: {
      consumer_key:        'YOUR TWITTER CONSUMER KEY HERE',
      consumer_secret:     'YOUR TWITTER CONSUMER SECRET HERE',
      access_token:        'YOUR TWITTER ACCESS TOKEN HERE',
      access_token_secret: 'YOUR ACCESS TOKEN SECRET HERE'
    },
    tweet: {
      prepend: 'Check out this latest article!',
      append: '#GoodRead'
    }
  }
});

exampleBot.tweetRandomLink((error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});

```

The above example would then tweet and log something like this:

```text
Sat Oct 01 23:37:20 +0000 2016: Check out this latest article! "Title of article" http://www.example3.com/article #GoodRead
```

## Usage

### `const exampleBot = new RssTweetBot(options)`

Creates an instance of `RssTweetBot`. This requires an options object consisting of several required key/value pairs, adhering to the following format:

#### `options.rss`
```javascript
{
  feeds: [
    'http://www.example1.com/',
    'http://www.example2.com/',
    'http://www.example3.com/',
    'http://www.example4.com/',
    'http://www.example5.com/',
  ],
  daysBack: 90 // optional
}
```
The value for `feeds` must be an array of URLs that are either RSS feeds or ATOM feeds.

As an optional parameter, `daysBack` currently only deals with the "published date" value returned from the RSS/ATOM feed. It allows you for greater filtering flexibility.

#### `options.twitter.keys`
```javascript
{
  consumer_key:        'YOUR TWITTER CONSUMER KEY HERE',
  consumer_secret:     'YOUR TWITTER CONSUMER SECRET HERE',
  access_token:        'YOUR TWITTER ACCESS TOKEN HERE',
  access_token_secret: 'YOUR ACCESS TOKEN SECRET HERE'
}
```

#### `options.twitter.tweet`
```javascript
{
  prepend: 'Check out this latest article!', //optional
  append: '#GoodRead' // optional
}
```
The properties and values for `tweet` are optional, as is `tweet` itself. These parameters allow for appending or prepending text before or after the standard "title + link" tweet that this module provides.

### `exampleBot.tweetRandomLink(callback)`

The only method of `RssTweetBot` is `tweetRandomLink`, which then handles talking all of the above options, making the call to a random feed item, receiving the results, and, choosing randomly from that results array, the item's title and link. Once that item is chosen, it is then tweeted, appending or prepending text to the tweet accordingly, following a "text + link" format. The callback function then returns the result, whether it be an error or success.

## License

The MIT License (MIT)

Copyright (c) 2016 John Foderaro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
