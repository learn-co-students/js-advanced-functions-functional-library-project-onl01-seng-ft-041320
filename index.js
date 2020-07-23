const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let coll = Object.values(collection);
        for (let i = 0; i < coll.length; i++) {
          callback(coll[i], i, coll)
        }
        return collection
    },

    map: function(collection, callback) {
      let coll = Object.values(collection);
      let newArr = [];
      for (let i = 0; i < coll.length; i++) {
        newArr.push(callback(coll[i], i))
      }
      return newArr
    },

    reduce: function(collection, callback, acc = 0) {
      let coll = Object.values(collection);
      for (let i = 0; i < coll.length; i++) {
        acc = callback(acc, coll[i], coll)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      let trueArr = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          trueArr.push(collection[i]);
        }
      }
      return trueArr;
    },

    size: function(collection, predicate) {
      let coll = Object.values(collection);
      let num = 0
      for (let i = 0; i < coll.length; i++) {
        num += 1
      }
      return num;
    },

    first: function(arr, x = 1) {
      if (x === 1) {
        return arr[0];
      } else {
        let i = 0;
        let newArr = [];
        while (i < x) {
          newArr.push(arr[i]);
          i++
        }
        return newArr;
      }
    },

    last: function(arr, x = arr.length) {
      if (x === arr.length) {
        return arr[arr.length - 1];
      } else {
        let i = arr.length - 1;
        let newArr = [];
        while (i > 0) {
          newArr.unshift(arr[i]);
          i--
        }
        return newArr;
      }
    }, 

    compact: function(arr) {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
          newArr.push(arr[i])
        }
      }
      return newArr;
    },

    sortBy: function(arr, callback) {
      let newArr = arr.slice();
      return newArr.sort((x,y) => callback(x) - callback(y))
    },

    flatten: function(arr, shallow = arr.length) {
      return arr.flat(shallow);
    },

    uniq: function(arr, isSorted, callback) {
      let newArr = [];
      if (isSorted === true) {
        for (let i = 0; i < arr.length; i++) {
          if (!newArr.includes(arr[i])){
            newArr.push(arr[i]);
          }
        }
        return newArr;
      } else {
        if (callback) {
          let cbArr = arr.map(x => callback(x))
          let sortArr = cbArr.sort();
          for (let i = 0; i < sortArr.length; i++) {
            if (!newArr.includes(sortArr[i])){
              newArr.push(sortArr[i]);
            }
          }
          return newArr
        } else {
          let sortArr = arr.sort();
          for (let i = 0; i < sortArr.length; i++) {
            if (!newArr.includes(sortArr[i])){
              newArr.push(sortArr[i]);
            }
          }
          return newArr
        }
      }
    },

    keys: function(obj) {
      let arr = [];
      for (let key in obj) {
        arr.push(key)
      }
      return arr;
    },

    values: function(obj) {
      let arr = [];
      for (let key in obj) {
        arr.push(obj[key])
      }
      return arr;
    },

    functions: function(obj) {
      let arr = [];
      for (let key in obj) {
        if (obj[key]) {
          arr.push(key)
        }
      }
      return arr.sort();
    },
  }
})()

fi.libraryMethod()
