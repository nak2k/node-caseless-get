const test = require('tape');
const { get, multiGet } = require('..');

test('test get', t => {
  t.plan(2);

  const obj = {
    FOO: 'foo',
    bar: 'bar',
  };

  t.equal(get(obj, 'foo'), 'foo');
  t.equal(get(obj, 'bar'), 'bar');
});

test('test multiGet', t => {
  t.plan(2);

  const obj = {
    FOO: 'foo',
    bar: 'bar',
  };

  const result = multiGet(obj, ['foo', 'bar']);
  t.equal(result[0], 'foo');
  t.equal(result[1], 'bar');
});
