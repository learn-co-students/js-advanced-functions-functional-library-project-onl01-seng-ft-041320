const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
//call alert and returns the original collection
    each: function(collection, callback) {
      Object.entries(collection).forEach(el => callback(el[1]));
      return collection;
    },
//successfully returns a correctly populated array
//does not modify the original array
    map: function(collection, callback) {
      return Object.entries(collection).map(el => callback(el[1]));
    },

//returns the correct reduced value when passed an initial value:
//and when not passed an initial value
    reduce: function(collection, callback, acc) {
      let total = !!acc ? acc : collection[0];
      let newArray = !!acc ? collection : collection.slice(1);
        newArray.forEach(el => total = callback(total, el))
        return total;
},
//returns the value if found
//does not traverse the whole array if the value is found early
//returns undefined if the value is not present
    find: function (collection, predicate) {
      return collection.find(el => predicate(el));
    },

//correctly filters for values that the callback evaluates as true
    filter: function (collection, predicate) {
      return collection.filter(el => predicate(el));
    },

    //correctly returns the size of the collection
    size: function (collection) {
      return Object.entries(collection).length;
    },

//returns the first element of the collection
    first: function (array, n) {
      return !!n ? array.slice(0,n) : array.slice(0,1)[0];
    },

//returns the last element of the collection
    last: function (array, n) {
      return !!n ? array.slice(-n) : array.slice(-1)[0];
    },

//returns a copy of the **array** with all falsy values removed
    compact: function (array) {
      return array.filter(elmt => !!elmt);
    },

//correctly sorts arrays
    sortBy: function (array, callback) {
      return Object.values(array)
        .map(elmt => elmt)
        .sort((a, b) => callback(a) - callback(b));
    },

//correctly flattens a ludicrously nested arra
    flatten: function (array, shallow=false) {
      return !!shallow ? array.flat() : array.flat(Infinity);
    },

//removes duplicate values from an array
    uniq: function(collection, sorted=false, callback = (element) => element) {
      for (let j = 0; j < collection.length; j++) {
        for (let i=collection.length; i>0; i--) {
          if (callback(collection[i]) === callback(collection[j]) && i !== j){
            collection.splice(i, 1)
          }
        }
      }
      return collection
    },

//retrieves all the names of the object's own enumerable properties
    keys: function (object) {
      return Object.entries(object).map(el => el[0]);
    },

//retrieves all the values of the object's own properties
    values: function (object) {
      return Object.entries(object).map(el => el[1]);
    },

//returns a sorted collection of the names of every method in an object
    functions: function(object) {
      return Object.entries(object).filter(a => typeof a[1] == "function");
    },

  }
})()

fi.libraryMethod()
