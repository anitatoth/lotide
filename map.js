const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(arr1, arr2) {
 
  const eqArrays = function(arr1, arr2) {
    if (arr1 === null || arr2 === null) return false;
    if (arr1.length !== arr2.length) return false;
  
    for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };
  
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`);
  }
};
  
  


const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map(["hi", "bye", "hello"], word => word[2]), ["h", "b", "h"]);
// assertArraysEqual(map(["cat", "Dog", "fish"]), ["c", "D", "f"]);
// assertArraysEqual(map(["", "guess", "this"]), ["1", "4", "5"]);