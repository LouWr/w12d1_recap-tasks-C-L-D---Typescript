const { makeSneakyCounter } = require("./index");

describe("Closure: ", () => {
  test("When a counter is created with makeSneakyCounter and the showCurrentValue method is called without incrementing or decrementing beforehand, it should return 0.", () => {
    const testCounter = makeSneakyCounter();
    const actual = testCounter.showCurrentValue();
    const expected = 0;
    expect(actual).toBe(expected);
  });
  test("When a counter is created with makeSneakyCounter and the increment method is called once, calling the showCurrentValue method should return 1.", () => {
    const testCounter = makeSneakyCounter();
    testCounter.increment();
    const actual = testCounter.showCurrentValue();
    const expected = 1;
    expect(actual).toBe(expected);
  });
  test("When a counter is created with makeSneakyCounter and the decrement method is called once, calling the showCurrentValue method should return -1.", () => {
    const testCounter = makeSneakyCounter();
    testCounter.decrement();
    const actual = testCounter.showCurrentValue();
    const expected = -1;
    expect(actual).toBe(expected);
  });
  test("When a counter is created with makeSneakyCounter, the increment method is called once, the decrement method is called once, and then the showCurrentValue method is called, it should return 0.", () => {
    const testCounter = makeSneakyCounter();
    testCounter.increment();
    testCounter.decrement();
    const actual = testCounter.showCurrentValue();
    const expected = 0;
    expect(actual).toBe(expected);
  });
});
