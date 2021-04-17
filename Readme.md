# sort-object-js

`sort-object-js` is a functionality help you sort an object by keys, properties.

# Install

`npm i sort-object-js`

# Usage

```javascript
const sortObject = require("sort-object-js")

// mock data
const obj = { a: { f: 4 }, c: { f: 1 }, d: { f: 3 }, b: { f: 2 } }
```

By default, the keys of object will be sorted in `ascending` order.

```javascript
sortObject(obj)
//  => {
//     a: { f: 4 },
//     b: { f: 2 },
//     c: { f: 1 },
//     d: { f: 3 },
//   }
```

The second parameter is an object of options.

# Options

- `sortOrder` {String} is `ascending` or `descending`, case insensitive.
- `keys` {Array} contains the specified keys in returned object.
- `sortFn` {Function} is defined to make the parameter for JS `.sort()` method with 2 parameters (consecutive keys)

#### options.sortOrder

```javascript
sortObject(obj, {
  sortOrder: "desc",
})
// => { d: { f: 3 }, c: { f: 1 }, b: { f: 2 }, a: { f: 4 }}
```

#### options.keys

```javascript
sortObject(obj, {
  keys: ["a", "d", "c"],
})
// => { a: { f: 4 }, c: { f: 1 }, d: { f: 3 } }
```

#### options.sortFn

```javascript
sortObject(obj, {
  sortFn: function (key1, key2) {
    return obj[key1].f - obj[key2].f
  },
})
// => { c: { f: 1 }, b: { f: 2 }, d: { f: 3 }, a: { f: 4 } }
```

# Author

#### Quang Tran
- [github/quetoiohue](https://github.com/quetoiohue)