const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      newCollection.forEach(element => callback(element))
      return collection
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let newArray = []
      newCollection.forEach(element => newArray.push(callback(element)))
      return newArray

    },

    reduce: function(collection, callback, acc) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let results = (!!acc) ? acc : newCollection[0]
      for (let i = (!!acc) ? 0 : 1; i < newCollection.length; i++) {

        results = callback(results, collection[i], collection)
      }
      return results
    },

    find: function(collection, predicate){
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < collection.length; i++){
        if(predicate(newCollection[i])){
          return newCollection[i]
        }
      }
    },

    filter: function (collection, predicate){
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let newArray = []
      for (let i = 0; i < collection.length; i++){
        if(predicate(newCollection[i])){
          newArray.push(newCollection[i]) 
        }
      }
      return newArray
    },

    size: function(collection){
      return (collection instanceof Array) ? collection.length : Object.values(collection).length
    },

    first: function(array, n = 0){
      return (n) ? array.slice(0, n) : array[0]
    },

    last: function(array, n = 0){
      return (n) ? array.slice(array.length-n, array.length) : array[array.length-1]
    },

    compact: function(collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(el => !badBad.has(el))
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

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
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },


    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
