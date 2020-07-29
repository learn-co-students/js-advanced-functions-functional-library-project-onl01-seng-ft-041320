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

    reduce: function(collection = [], callback = () => {}, accumulation = 0) {
        let newCollection = collection.slice[0]
        if (!accumulation) {
          accumulation = newCollection[0]
          newCollection = newCollection.slice[1]
        }
        for (let i = 0; i < newCollection.length; i++) {
          accumulation = callback(accumulation, newCollection[i], newCollection)
        }
        return accumulation
    },

    find: function() {

    },

    filter: function() {

    },

    size: function() {

    },

    first: function() {

    },

    last: function() {

    },

    compact: function() {

    },

    sortBy: function() {

    },

    flatten: function() {

    },

    unique: function() {

    },

    keys: function() {

    },

    values: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
