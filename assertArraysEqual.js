
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 5, 3], [1, 7, 3]);