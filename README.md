# all-equal
[[![Node Version][https://img.shields.io/badge/node.js-%3E=_6-green.svg]][http://nodejs.org/download/]
[![Build Status](https://travis-ci.org/BlackHole1/all-equal.svg?branch=master)](https://travis-ci.org/BlackHole1/all-equal)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://github.com/BlackHole1/all-equal)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://github.com/BlackHole1/all-equal)

[![NPM](https://nodei.co/npm/all-equal.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/all-equal/)


> Abandon `===`, Use array to judge

## install

``` bash
# Install with npm
$ npm install all-equal --save

# Install with yarn
$ yarn add all-equal

# Install with bower
$ bower install all-equal --save
```

## Usage

``` javascript
const allEqual = require('all-equal')

allEqual(['111', '222'], ['111', '333']) //=> false
allEqual(['111', '111'], ['111', '333']) //=> false
allEqual(['111', '111'], ['222', '222']) //=> true
allEqual(['111', '111', '111'], ['222', '222']) //=>true
allEqual(['111', '111', '111'], ['222', '222'], ['333', '333']) //=>true
```

## Running tests

Install dev dependencies:

``` bash
$ npm i -d && npm test
```

## Contributing


| **Commits** | **Contributor** | 
| --- | --- |
| 1 | [Black-Hole](https://github.com/BlackHole1) |

## Author

**Black-Hole**

* Email：158blackhole@gmail.com
* Blog：[http://bugs.cc](http://bugs.cc)
* WeiBo：[http://weibo.com/comelove](http://weibo.com/comelove)
* Twitter：[https://twitter.com/Free_BlackHole](https://twitter.com/Free_BlackHole)