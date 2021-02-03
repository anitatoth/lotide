const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
  }
};

const countLetters = function(string) {
  let countResult = {};
  for (const letter of string) {
  
    if (letter !== ' ') {
      if (countResult[letter]) {
        countResult[letter] += 1;
      } else {
        countResult[letter] = 1;
      }
    }
  } return countResult;
};

//assertEqual(countLetters("LHL"),{L:2, H:1});
const x = countLetters("lighthouse in the house");
console.log(x);