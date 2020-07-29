const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      newCollection.forEach(element => callback(element))
      //for (let i = 0; i < newCollection.length; i++)
      //callback(newCollection[i])
      return collection
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      const newArray = []
      newCollection.forEach(element => newArray.push(callback(element)))
      // for (let i = 0; i < newCollection.length; i++)
      // newArray.push(callback(collection[i]))
      return newArray
    },

    reduce: function(collection = [], callback = () => {}, accumulation) {
        let newCollection = collection.slice(0)
        if (!accumulation) {
          accumulation = newCollection[0]
          newCollection = newCollection.slice(1)
        }
        for (let i = 0; i < newCollection.length; i++) {
          accumulation = callback(accumulation, newCollection[i], newCollection)
        }
        return accumulation
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let array = []
      for (let i = 0; i <collection.length; i++) {
        if (predicate(collection[i])) {
          array.push(collection[i])
        }
      }
      return array
    },

    size: function(collection) {
      let newCollection = Object.values(collection)
      let num = 0
      for (let i = 0; i < newCollection.length; i++) {
        num += 1
      }
      return num
    },

    first: function(collection, n = 0) {
      return n ? collection.slice(0, n) : collection[0]
    },

    last: function(collection, n = 0) {
      return n ? collection.slice(collection.length - n, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      let newCollection = []
      for (let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          newCollection.push(collection[i])
        }
      }
      return newCollection
    }, 

    sortBy: function(collection, callback) {
      let newArray = [...collection]
      return newArray.sort(function(a, b) {
        return callback(a) - callback (b)
      })
    },

    flatten: function(a, shallow = a.length) {
      return a.flat(shallow)
    },
//Don't understand this:
    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = [] 
      for (let key in obj) {
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      const functionNames = []
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },
  }
})()

fi.libraryMethod()
