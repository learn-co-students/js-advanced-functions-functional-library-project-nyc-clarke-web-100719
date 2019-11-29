const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const key in collection) {
        callback(collection[key], key, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection
      if (!Array.isArray(collection)) {
        newCollection = Object.values(collection)
      } else {
        newCollection = Object.assign([], collection)
      }
      
      let newArray = []
      for (const key in newCollection) {
        newArray.push(callback(newCollection[key], key, newCollection))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      let newAcc
      let newCollection = Object.assign([], collection)
      if (acc) {
        newAcc = acc
      } else {
        newAcc = newCollection[0]
        newCollection = newCollection.slice(1)
      }
      for (const key in newCollection) {
        newAcc = callback(newAcc, newCollection[key], newCollection)
      }
      return newAcc
    },

    find: function(collection, predicate) {
      for (const value of collection) {
        if (predicate(value)) {
          return value
        }
      }
    },

    filter: function(collection, predicate) {
      let newCollection = []
      for (const value of collection) {
        if (predicate(value)) {
          newCollection.push(value)
        }
      }
      return newCollection
    },

    size: function(collection) {
      if (!Array.isArray(collection)) {
        return Object.keys(collection).length
      } else {
        return collection.length
      }
    },

    first: function(array, num) {
      let newArr = []
      if (!num) {
        return array[0]
      } else {
        for (let i = 0; i < num; i++) {
          newArr.push(array[i])
        }
        return newArr
      }
    },

    last: function(array, num) {
      let newArr = []
      if (!num) {
        return array[array.length - 1]
      } else {
        for (let i = array.length - num; i < array.length; i++) {
          newArr.push(array[i])
        }
        return newArr
      }
    },

    compact: function(array) {
      return fi.filter(array, function(element) {
        if (element) {
          return true
        }
      })
    },

    sortBy: function(array, callback) {
      const newArr = Object.assign([], array)
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow, newArr = []) {
      if (!Array.isArray(array)) {
        return newArr.push(array)
      }
      if (shallow) {
        for (const value of array) {
          if (Array.isArray(value)) {
            for (const val of value) {
              newArr.push(val)
            }
          } else {
            newArr.push(value)
          }
        }
      } else {
        for (const value of array) {
          this.flatten(value, false, newArr)
        }
      }
      return newArr
    },

    uniq: function(array, isSorted, callback) {
      let callbackArr
      let returnArr = []
      if (callback) {
        callbackArr = fi.map(array, callback)
      } else {
        callbackArr = Object.assign([], array)
      }

      if (isSorted) {
        returnArry.push(array[0])
        for (let i = 1; i < callbackArr.length; i++) {
          if (callbackArr[i] !== callbackArr[i + 1]) {
            returnArr.push(array[key])
          }
        }
      } else {
        const modifiedVals = new Set()
        for (const key in callbackArr) {
          if (!modifiedVals.has(callbackArr[key])) {
            modifiedVals.add(callbackArr[key])
            returnArr.push(array[key])
          }
        }
      }
      return returnArr
    },

    keys: function(object) {
      let keyArr = []
      for (const key in object) {
        keyArr.push(key)
      }
      return keyArr
    },

    values: function(object) {
      let valueArr = []
      for (const key in object) {
        valueArr.push(object[key])
      }
      return valueArr
    },

    functions: function(object) {
      let functionArr = []
      for (const key in object) {
        if (typeof object[key] === 'function') {
          functionArr.push(key)
        }
      }
      return functionArr.sort()

    },


  }
})()

fi.libraryMethod()
