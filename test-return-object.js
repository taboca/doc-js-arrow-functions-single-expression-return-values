var test = require('tape');

let returnEmptyObject = () => ({})

test('Empty statement return type is an object', function(t) { 

  t.equal(typeof returnEmptyObject(), typeof {});
  t.end();
});


