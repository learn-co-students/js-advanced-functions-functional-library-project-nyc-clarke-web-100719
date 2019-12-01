const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, fn) {
      let tempArr = Array.isArray(arr)? arr.slice() : Object.values(arr)
      for(let i = 0; i < tempArr.length; i++){
        fn(tempArr[i])
      }
      return arr;
    },

    map: function(givenObj, fn) {
      let tempArr = Array.isArray(givenObj)? givenObj.slice() : Object.values(givenObj)
      for(let i = 0; i < tempArr.length; i++){
        tempArr[i] = fn(tempArr[i])
      }
      return tempArr
    },

    reduce: function(givenObj, fn, acc) {
      let tempArr
      acc ? tempArr =  givenObj.slice() :(acc = givenObj[0],tempArr = givenObj.slice(1))
      for(let i = 0; i < tempArr.length; i++){
        acc = fn(acc,tempArr[i], tempArr)
      }
      return acc
    },

    find: function(col, fn){
        for(let i = 0; i < col.length; i++){
            if(fn(col[i]))return col[i]
        }
        return undefined;
    },

    filter:function(col,fn){
      let tempArr = []
      for(let i = 0; i < col.length; i++){
        if(fn(col[i]))tempArr.push(col[i])
      }
      return tempArr
    },
    size: function(col){
        return Array.isArray(col)? col.length : Object.keys(col).length
    },

    first: function(col, n = 1){
      if(n === 1)return col[0]
      let tempArr = []
      for(let i = 0; i < n; i++){
        tempArr.push(col[i])
      }
      return tempArr
    },
    last: function(col,n){
      let tempArr = []
      if(!n)return col[col.length-1]
      for(let i = col.length-n; i < col.length; i++){
        tempArr.push(col[i])
      }
      return tempArr
    },
    compact: function(arr){
      let tempArr = []
      for(let i = 0; i < arr.length; i++){
        if(arr[i])tempArr.push(arr[i])
      }
      return tempArr
    },

    sortBy: function(arr,cb){
      let tempArr = arr.slice()
      return tempArr.sort((a,b) => cb(a) - cb(b))
    },
    flatten: function(arr,flag, container = []){
        if(!Array.isArray(arr)) return container.push(arr);
        if(flag){
          for(const item of arr){
            if(Array.isArray(item)){
                for(const itemn of item){
                  container.push(itemn)
                }
            }
            else container.push(item)
          }
        }
        else{
            for(const item of arr)this.flatten(item,0,container)
        }
        return container
    },

    // cb
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
    keys:function(obj){
      let temp =[]
      for(const key in obj){
          temp.push(key)
      }
      return temp
    },
    values:function(obj){
      let temp=[]
      for(const key in obj){
        temp.push(obj[key])
      }
      return temp
    },
    functions: function(obj){
      let temp = []
      for(const key in obj){
        if(typeof obj[key] === "function")temp.push(key)
      }
      return temp
    }
  }
})()

fi.libraryMethod()
