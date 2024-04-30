const removeFromArray = function (array, ...args) {
  for (const num of args) {
    while (array.includes(num)) {
      const idx = array.indexOf(num);
      if (idx !== -1) array.splice(idx, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
