const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      newCollection.forEach(element => callback(element))
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let newArray = []
      newCollection.forEach(element => newArray.push(callback(element)))
      return newArray
    },

    reduce: function(collection, callback, acc) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let results = !!acc ? acc : newCollection[0]
      for (let i = !!acc ? 0 : 1; i < newCollection.length; i++) {
        results = callback(results, collection[i], collection)
      }
      return results
    },

    find: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < collection.length; i++)
        if (predicate(newCollection[i])){
          return newCollection[i]
        } 

      return undefined
    },

    filter: function(collection, predicate){
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let newArray = []
      for (let i = 0; i < collection.length; i++)
        if (predicate(newCollection[i])){
         newArray.push(newCollection[i])
        } 
        return newArray
    },

    size: function(collection){
      return (collection instanceof Array) ? collection.length : Object.values(collection).length
    },

    first: function(array, n=0){
      return (n) ? array.slice(0, n) : array[0]
    },

    last: function(array, n=0){
      return (n) ? array.slice(array.length-n, array.length) : array[array.length-1]
    },

    compact: function(array){
      let falseyValues = [false, null, 0, "", undefined, NaN]
      return fi.filter(array, element => !falseyValues.includes(element))
    
    },

    sortBy: function(array, callback){
      const newArray = [...array]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow=false){
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
      // honestly couldn't come up with this on my own. I know it's a recursive function
      // I know that reduce is taking in an empty array which is assigned to acc, and value is the value of the
      // element of the array.... then if the value ISN'T another array it is concatnating(merging) that value into 
      // the empty array. And if it is, it is running THAT array through itself(recursive) and adding those values
      // to the array once they themselves are not array. the d is the level of depth, so if you want this to 
      // happen until the array isn't nested at all, you pass in Infinity. This won't loop forever because reduce
      // will only go through each element of the array. If you wanted 1 level you would pass in 1 because
      // d has to be > 0 for it to run the reduce, ect...
      function flatDeep(arr, d = 1) {
        return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                     : arr.slice();
     };

      let newArray = [...array]
      if (shallow){
      return flatDeep(newArray, 1)
      } else {
        return flatDeep(newArray, Infinity)
      }
    },

    uniq: function(collection, isSorted=false, callback=false){
      let newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      
      function uniqueValues(value, index, self){
        return self.indexOf(value) === index;
      }
      if(!isSorted){
        newArray = newArray.sort()
      }
      if(!!callback){
        let moddedArray = []
        let returnArray = []
        newArray.forEach(element => {
          let moddedValue = callback(element)
          if(!moddedArray.includes(moddedValue)){
            moddedArray.push(moddedValue)
            returnArray.push(element)
          }
        })
        return returnArray
      }
      return newArray.filter(uniqueValues)
    },

    keys: function(collection){
      return Object.keys(collection)
    },
      
    values: function(collection){
      return Object.values(collection)
    },
    
    functions: function(obj){
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    }
  }
})()

fi.libraryMethod()