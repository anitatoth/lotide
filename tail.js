

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};


module.exports = tail;
