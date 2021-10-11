/* The `makeSneakyCounter` function contains a variable `secretCount` that's contained within a closure. When `makeSneakyCounter` is called, it should return an object with three methods. Write the code for these three methods. */

// increment needs to call changeBy with value = 1
// decrement needs to call changeBy with value =-1
// showCurrentValue needs to return secretCount

function makeSneakyCounter() {
  let secretCount = 0;
  function changeBy(value) {
    secretCount += value;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    showCurrentValue: function () {
      return secretCount;
    },
  };
}

module.exports = { makeSneakyCounter };
