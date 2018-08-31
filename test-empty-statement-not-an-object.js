var test = require('tape');

let returnEmptyObject = () => {}

test('Empty statement return type is not an object', function(t) { 
  t.notEqual(typeof returnEmptyObject(), typeof {});
  t.end();
});


