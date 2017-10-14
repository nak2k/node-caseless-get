# caseless-get

Retrieve the property value case-insensitively.

## Installation

```
npm i caseless-get -S
```

## Usage

``` javascript
const { get, multiGet } = require('caseless-get');

const obj = {
  FOO: 'foo',
  Bar: 'bar',
};

get(obj, 'foo');                 // => 'foo'
multiGet(obj, ['foo', 'bar']);   // => ['foo', 'bar']
```

## License

MIT
