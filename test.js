'use strict'

var test = require('tape')
var Observ = require('observ')
var once = require('./')

test(function (t) {
  var o = Observ()
  once(o, function (value) {
    t.equal(value, 1)
  })
  o.set(1)
  // noop
  o.set(2)
  t.end()
})
