"use strict";

const assert = require("power-assert");
const convertFineIntoRatio = require("../convertFineIntoRatio");

function closeTo(expected, actual, delta) {
  return Math.abs(expected - actual) <= delta;
}

assert(convertFineIntoRatio(1000) === 2);
assert(closeTo(convertFineIntoRatio(888), 1.888, 1e-6));
assert(closeTo(convertFineIntoRatio(782), 1.782, 1e-6));
assert(closeTo(convertFineIntoRatio(682), 1.682, 1e-6));
assert(closeTo(convertFineIntoRatio(587), 1.587, 1e-6));
assert(closeTo(convertFineIntoRatio(498), 1.498, 1e-6));
assert(closeTo(convertFineIntoRatio(414), 1.414, 1e-6));
assert(closeTo(convertFineIntoRatio(335), 1.335, 1e-6));
assert(closeTo(convertFineIntoRatio(260), 1.26, 1e-6));
assert(closeTo(convertFineIntoRatio(189), 1.189, 1e-6));
assert(closeTo(convertFineIntoRatio(122), 1.122, 1e-6));
assert(closeTo(convertFineIntoRatio(59), 1.059, 1e-6));

assert(convertFineIntoRatio(0) === 1);
assert(closeTo(convertFineIntoRatio(-59), 1 / 1.059, 1e-6));
assert(closeTo(convertFineIntoRatio(-122), 1 / 1.122, 1e-6));
assert(closeTo(convertFineIntoRatio(-189), 1 / 1.189, 1e-6));
assert(closeTo(convertFineIntoRatio(-260), 1 / 1.26, 1e-6));
assert(closeTo(convertFineIntoRatio(-335), 1 / 1.335, 1e-6));
assert(closeTo(convertFineIntoRatio(-414), 1 / 1.414, 1e-6));
assert(closeTo(convertFineIntoRatio(-498), 1 / 1.498, 1e-6));
assert(closeTo(convertFineIntoRatio(-587), 1 / 1.587, 1e-6));
assert(closeTo(convertFineIntoRatio(-682), 1 / 1.682, 1e-6));
assert(closeTo(convertFineIntoRatio(-782), 1 / 1.782, 1e-6));
assert(closeTo(convertFineIntoRatio(-888), 1 / 1.888, 1e-6));
assert(convertFineIntoRatio(-1000) === 1 / 2);
