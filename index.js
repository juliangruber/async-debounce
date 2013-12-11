module.exports = debounce;

var slice = [].slice;

function debounce(fn, interval) {
  var timeout;
  var running = false;
  var nextArgs;
  
  return function() {
    var args = slice.call(arguments);
    args.push(function() {
      running = false;
      if (nextArgs) {
        run(nextArgs);
        nextArgs = null;
      }
    });
    
    if (running) return nextArgs = args;
    if (timeout) clearTimeout(timeout);
    
    timeout = setTimeout(function() {
      run(args);
      timeout = null;
    }, interval);
    
    function run(args) {
      fn.apply(null, args);
      running = true;
    }
  }
}