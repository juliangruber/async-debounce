
# async-debounce

  Debounce asynchronous functions.
  
  Debouncing means that given function is only run after no calls to it have happened for `x` milliseconds. With functions that do asynchronous work, i.e. not finish in the same tick, you also want no calls to happen while the function is currently running - limit the concurrency to one - and rerun with new arguments afterwards.

  [![build status](https://secure.travis-ci.org/juliangruber/async-debounce.png)](http://travis-ci.org/juliangruber/async-debounce)

  [![testling badge](https://ci.testling.com/juliangruber/async-debounce.png)](https://ci.testling.com/juliangruber/async-debounce)

## Example

```js
var debounce = require('async-debounce');

function async(num, done) {
  console.log('start', num);
  setTimeout(function() {
    console.log('done', num);
    done();
  }, 200);
}

var debounced = debounce(async, 50);

console.log('call 1'); debounced(1);
setTimeout(function() { console.log('call 2'); debounced(2) }, 100);
setTimeout(function() { console.log('call 3'); debounced(3) }, 200);
```

  And in the output you can see that the function is run at max once at a time and if the debounce triggers while the function is still running, it will be queued.

```bash
$ node example.js
call 1
start 1
call 2
call 3
done 1
start 3
done 3
```

## Installation

  Install with [npm](https://npmjs.org):
  
```bash
$ npm install async-debounce
```

  Install with [component(1)](http://component.io):

```bash
$ component install juliangruber/async-debounce
```

## API

### fn = debounce(fn, interval)

Returns a decorated version of `fn` that when called calls `fn` only when no further calls have happended for `interval` milliseconds and if it's not currently running. When it's done running and a call has happened while it was still running, it's called again with latest arguments.

## License

  MIT
