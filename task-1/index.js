//Use recursion to calculate the exponential value here (e.g. calculateExponent(4,1) === 4, calculateExponent(4,2) === 16, calculateExponent(4,3) === 64):

function calculateExponent(baseNum, exponent) {
  // take in 2 numbers
  // exponent is a counter
  // stop recursion with ifs
  // exp = 1, return 1
  // exp = 0, return 0
  // return baseNum * function(baseNum, exp-1)

  if (exponent === 0) {
    return 1;
  }
  if (baseNum === 0) {
    return 0;
  }

  return baseNum * calculateExponent(baseNum, exponent - 1);
}

module.exports = { calculateExponent };
