const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
        for (let key in collection) {
          callback(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const new_array = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          new_array.push(callback(collection[i], i, collection))
        }
      } else {
        for (let key in collection) {
          new_array.push(callback(collection[key], key, collection))
        }
      }
      return new_array
    },

    reduce: function(collection, callback, start) {
      if (!Array.isArray(collection)) {
        collection = Object.values(collection)
      }
      let memo = start
      for (let i = 0; i < collection.length; i++) {
        if (i === 0 && memo === undefined) {
          memo = collection[i]
        } else {
          memo = callback(memo, collection[i], collection)
        }
      }
      return memo
    },

    find: function(collection, callback) {
      if (!Array.isArray(collection)) {
        collection = Object.values(collection)
      }
      for (let elem of collection) {
        if (callback(elem)) {
          return elem
        }
      }
    },
    filter: function(collection, callback) {
      if (!Array.isArray(collection)) {
        collection = Object.values(collection)
      }
      const new_array = []
      for (let elem of collection) {
        if (callback(elem)) {
          new_array.push(elem)
        }
      }
      return new_array
    },
    size: function(collection) {
      return Object.values(collection).length
    },
    first: function(array, n = 1) {
      if (n !== 1) {
        return array.slice(0, n)
      } else {
        return array[0]
      }
    },
    last: function(array, n = 1) {
      if (n !== 1) {
        return array.slice(-n)
      } else {
        return array.slice(-1)[0]
      }
    },
    compact: function(array) {
      const new_array = []
      for (let elem of array) {
        if (elem) {
          new_array.push(elem)
        }
      }
      return new_array
    },
    sortBy: function(array, callback) {
      return array.slice().sort((a, b) => {
        let new_a = callback(a)
        let new_b = callback(b)
        if (Number.isInteger(new_a) && Number.isInteger(new_b)) {
          return new_a - new_b
        } else {
          if (new_a > new_b) {
            return 1
          } else if (new_a < new_b) {
            return -1
          }
          return 0
        }
      })
    },
    flatten: function(array, oneLevel) {
      const new_array = []
      array = JSON.parse(JSON.stringify(array))
      if (!oneLevel) {
        for (let elem of array) {
          if (Array.isArray(elem)) {
            let flattened_array = this.flatten(elem)
            for (let nestedElem of flattened_array) {
              new_array.push(nestedElem)
            }
          } else {
            new_array.push(elem)
          }
        }
      } else {
        for (let elem of array) {
          if (Array.isArray(elem)) {
            for (let nestedElem of elem) {
              new_array.push(nestedElem)
            }
          } else {
            new_array.push(elem)
          }
        }
      }
      return new_array
    },
    uniq: function(array, isSorted = false, callback) {
      const new_array = []
      if (!callback) {
        for (let elem of array) {
          if (!new_array.includes(elem)) {
            new_array.push(elem)
          }
        }
      } else {
        const transformed_elems = []
        for (let elem of array) {
          if (!transformed_elems.includes(callback(elem))) {
            new_array.push(elem)
          }
          transformed_elems.push(callback(elem))
        }
      }
      return new_array
    },
    keys: function(object) {
      const keys = []
      for (let key in object) {
        keys.push(key)
      }
      return keys
    },
    values: function(object) {
      const values = []
      for (let key in object) {
        values.push(object[key])
      }
      return values
    },
    functions: function(object) {
      const functions = []
      for (let key in object) {
        if (typeof object[key] === 'function') {
          functions.push(key)
        }
      }
      return functions.sort()
    },
  }
})()

fi.libraryMethod()