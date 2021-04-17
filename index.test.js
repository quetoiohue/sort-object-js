const sortObject = require("./index")

const obj = { a: { f: 5 }, c: { f: 1 }, d: { f: 4 }, b: { f: 2 } }

test("Sort the object by keys with order ascending", () => {
  expect(sortObject(obj)).toStrictEqual({
    a: { f: 5 },
    b: { f: 2 },
    c: { f: 1 },
    d: { f: 4 },
  })
})

test("Sort the object by keys with order descending", () => {
  expect(
    sortObject(obj, {
      sortOrder: "desc",
    })
  ).toStrictEqual({ d: { f: 4 }, c: { f: 1 }, b: { f: 2 }, a: { f: 5 } })
})

test("Sort the object with a defined sort function base on the Javascript's sort method", () => {
  expect(
    sortObject(obj, {
      sortFn: function (key1, key2) {
        return obj[key1].f - obj[key2].f
      },
    })
  ).toStrictEqual({ c: { f: 1 }, b: { f: 2 }, d: { f: 4 }, a: { f: 5 } })
})

test("Sort the object and return a new object only contain the specified keys", () => {
  expect(
    sortObject(obj, {
      keys: ["a", "d", "c"],
    })
  ).toStrictEqual({ a: { f: 5 }, c: { f: 1 }, d: { f: 4 } })
})
