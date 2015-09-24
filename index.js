'use strict'

module.exports = function observOnce (observable, listener) {
  var unlisten = observable(function listenOnce (value) {
    unlisten()
    listener(value)
  })
}
