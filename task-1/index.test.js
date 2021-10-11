const { calculateExponent } = require("./index");

describe("Recursion: ", () => {
  test("When handed two numbers > 0, calculateExponent should calculate the first number to the power of the second number.", () => {
    const baseNum = 2;
    const exponents = [1, 2, 3, 4, 5, 6];
    const expected = [2, 4, 8, 16, 32, 64];
    const actual = exponents.map((exponent) =>
      calculateExponent(baseNum, exponent)
    );
    expect(actual).toEqual(expected);
  });
  test("When handed a base number > 0 and an exponent === 0, calculateExponent should return 1.", () => {
    const baseNums = [1, 2, 3, 4, 5];
    const exponent = 0;
    const expected = [1, 1, 1, 1, 1];
    const actual = baseNums.map((baseNum) =>
      calculateExponent(baseNum, exponent)
    );
    expect(actual).toEqual(expected);
  });
  test("When handed a base number === 0 and an exponent, calculateExponent should return 0.", () => {
    const baseNum = 0;
    const exponents = [1, 2, 3, 4, 5];
    const expected = [0, 0, 0, 0, 0];
    const actual = exponents.map((exponent) =>
      calculateExponent(baseNum, exponent)
    );
    expect(actual).toEqual(expected);
  });
});
