/**?
 * 1. sort object:
 *  - by key
 *  - by properties
 * 2. sort order: asc, desc
 * 3. sort according to the key array
 */


function sortOrderFn(order) {
  return (key1, key2) =>
    order === "desc" ? key2.localeCompare(key1) : key1.localeCompare(key2)
}

function sortObject(obj, opts = {}) {
  let objKeys = Object.keys(obj)
  let { sortFn, sortOrder, keys } = opts

  // sort by keys
  if (!sortFn) {
    sortFn = sortOrderFn(sortOrder)
  }

  return (keys || objKeys).sort(sortFn).reduce((newObj, currentKey) => {
    if (objKeys.includes(currentKey)) {
      newObj[currentKey] = obj[currentKey]
    }

    return newObj
  }, {})
}


module.exports = sortObject