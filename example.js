var debounce = require('./');

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
