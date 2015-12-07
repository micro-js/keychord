
# keychord

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Takes in a keypress/keydown/keyup event and returns a chord striE.g. &#x27;ctrl+shift+t&#x27;

## Installation

    $ npm install @micro-js/keychord

## Usage

```js
var keychord = require('@micro-js/keychord')

function render () {
  return <div onKeypress={handleKeypress} />
}

function handleKeypress (e) {
  switch (keychord(e)) {
    case 'enter':
      // handle enter
      break
    case 'shift+enter':
      // handle shift+enter
      break
    case 'ctrl+up':
      // handle ctrl+up
      break
  }
}
```

## API

### keychord(event)

- `event` - A (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)[KeyboardEvent] as in keypress/keyup/keydown.

**Returns:** A keychord string. If only one key is being pressed, just returns the name of that key. If it is a sequence of keys, returns a string of the form 'ctrl+shift+enter'.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/keychord.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/keychord
[git-image]: https://img.shields.io/github/tag/micro-js/keychord.svg
[git-url]: https://github.com/micro-js/keychord
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/keychord.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/keychord
