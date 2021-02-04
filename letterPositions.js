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





const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
    // console.log(sentence[i]);
    // console.log(sentence.length);
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]].push(i);
      }
    }
  } return results;
};
const x = letterPositions("hello");
console.log(x);
assertArraysEqual(letterPositions("hello").e, [1]);

