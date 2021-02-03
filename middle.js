
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

const middle = function(array) {
  let theMiddle = [];
  if (array.length <= 2) {
    return theMiddle;

  } else if (array.length % 2 === 0) {
    //Even length array.
    theMiddle.push(Math.floor(array[array.length / 2] - 1));
    theMiddle.push(Math.floor(array[array.length / 2]));
    return theMiddle;

  } else {
    //Odd Length Array
    const test = Math.floor(array.length / 2);
    theMiddle.push(array[test]);
    return theMiddle;
  }
};


assertArraysEqual(middle([1, 2, 3, 4]), [1, 2, 3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]