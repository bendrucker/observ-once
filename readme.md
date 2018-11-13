# observ-once [![Build Status](https://travis-ci.org/bendrucker/observ-once.svg?branch=master)](https://travis-ci.org/bendrucker/observ-once) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/observ-once.svg)](https://greenkeeper.io/)

> Listen to a single observable value change and immediate unlisten


## Install

```
$ npm install --save observ-once
```


## Usage

```js
var once = require('observ-once')
var Observ = require('observ')
var observable = Observ()

once(observable, console.log)
observable.set(1)
observable.set(2)
observable.set(3)
//=> only prints 1
```

## API

#### `once(observable, listener)` -> `undefined`

##### obserable

*Required*  
Type: `function`

An [observable](https://github.com/raynos/observ) value representation.

##### listener

*Required*  
Type: `function`

A listener to call the first time the value changes.


## License

MIT © [Ben Drucker](http://bendrucker.me)
