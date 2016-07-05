"use strict";

/**
 * convert to detune(cents) from ableton-live operator's fine
 * @param  {number} fine
 * @return {number}
 */
function convertFineIntoDetune(fine) {
  var sign = fine < 0 ? -1 : +1;
  var ratio = 1 + Math.abs(fine) / 1000;
  return sign * Math.log(ratio) * Math.LOG2E * 12 * 100;
}

module.exports = convertFineIntoDetune;
