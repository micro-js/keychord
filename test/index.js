/**
 * Imports
 */

var keychord = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(keychord(event(13)), 'enter')
  t.equal(keychord(event(13, {shift: true})), 'shift+enter')
  t.equal(keychord(event(17, {ctrl: true})), 'ctrl')
  t.end()
})

/**
 * Helpers
 */

function event (which, mods) {
  mods = mods || {}
  return {
    which: which,
    ctrlKey: mods.ctrl,
    altKey: mods.alt,
    metaKey: mods.meta,
    shiftKey: mods.shift
  }
}
