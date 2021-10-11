/* The `makeSneakyCounter` function contains a variable `secretCount` that's contained within a closure. When `makeSneakyCounter` is called, it should return an object with three methods. Write the code for these three methods. */

function makeSneakyCounter() {
  let secretCount = 0;
  function changeBy(value) {
    secretCount += value;
  }
  return {
    increment: "👉 Replace this string with your method here!",
    decrement: "👉 Replace this string with your method here!",
    showCurrentValue: "👉 Replace this string with your method here!",
  };
}

module.exports = { makeSneakyCounter };
