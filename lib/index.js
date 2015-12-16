/**
 * Modules
 */

var keycodes = require('@f/keycodes')

/**
 * Expose keychord
 */

module.exports = keychord['default'] = keychord

/**
 * keychord
 */

function keychord (e) {
  var chord = []

  if (e.ctrlKey) chord.push('ctrl')
  if (e.altKey) chord.push('alt')
  if (e.metaKey) chord.push('command')
  if (e.shiftKey) chord.push('shift')

  var name = keycodes[e.which]
  if (chord.indexOf(name) === -1) {
    chord.push(name)
  }

  return chord.join('+')
}
