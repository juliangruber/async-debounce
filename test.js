var debounce = require('./');
var test = require('tape');

test('debounce', function(t) {
  t.plan(4);
  var ran = 0;
  
  function async(num, done) {
    ran == 0
      ? t.equal(num, 1, 'started 1')
      : t.equal(num, 3, 'started 3');
    setTimeout(function() {
      ++ran == 1
        ? t.equal(num, 1, 'ran 1')
        : t.equal(num, 3, 'ran 3');
      done();
    }, 200);
  }
  
  var debounced = debounce(async, 50);
  
  debounced(1);
  setTimeout(function() { debounced(2) }, 100);
  setTimeout(function() { debounced(3) }, 200);
});