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

const without = function(source, itemsToRemove) {
  let removed = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      removed.push(element);
    }
  }
  return removed;
};
 

   
  
const myReturn = without([1, 2, 3], [1]); // => [2, 3]
console.log(myReturn);
const mySecondReturn = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
console.log(mySecondReturn);

assertArraysEqual(myReturn, [2,3]);
assertArraysEqual(mySecondReturn, ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);