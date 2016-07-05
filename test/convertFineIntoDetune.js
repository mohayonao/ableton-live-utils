"use strict";

const assert = require("power-assert");
const convertFineIntoDetune = require("../convertFineIntoDetune");

function closeTo(expected, actual, delta) {
  return Math.abs(expected - actual) <= delta;
}

assert(convertFineIntoDetune(1000) === 1200);
assert(closeTo(convertFineIntoDetune(888), 1100, 1));
assert(closeTo(convertFineIntoDetune(782), 1000, 1));
assert(closeTo(convertFineIntoDetune(682), 900, 1));
assert(closeTo(convertFineIntoDetune(587), 800, 1));
assert(closeTo(convertFineIntoDetune(498), 700, 1));
assert(closeTo(convertFineIntoDetune(414), 600, 1));
assert(closeTo(convertFineIntoDetune(335), 500, 1));
assert(closeTo(convertFineIntoDetune(260), 400, 1));
assert(closeTo(convertFineIntoDetune(189), 300, 1));
assert(closeTo(convertFineIntoDetune(122), 200, 1));
assert(closeTo(convertFineIntoDetune(59), 100, 1));

assert(convertFineIntoDetune(0) === 0);
assert(closeTo(convertFineIntoDetune(-59), -100, 1));
assert(closeTo(convertFineIntoDetune(-122), -200, 1));
assert(closeTo(convertFineIntoDetune(-189), -300, 1));
assert(closeTo(convertFineIntoDetune(-260), -400, 1));
assert(closeTo(convertFineIntoDetune(-335), -500, 1));
assert(closeTo(convertFineIntoDetune(-414), -600, 1));
assert(closeTo(convertFineIntoDetune(-498), -700, 1));
assert(closeTo(convertFineIntoDetune(-587), -800, 1));
assert(closeTo(convertFineIntoDetune(-682), -900, 1));
assert(closeTo(convertFineIntoDetune(-782), -1000, 1));
assert(closeTo(convertFineIntoDetune(-888), -1100, 1));
assert(convertFineIntoDetune(-1000) === -1200);
