# caseless-get

大文字小文字の区別なくプロパティの値を取得する。

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
