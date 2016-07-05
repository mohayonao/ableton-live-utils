"use strict";

/**
 * convert to ratio from ableton-live operator's fine
 * @param  {number} fine
 * @return {number}
 */
function convertFineIntoRatio(fine) {
  if (fine < 0) {
    return 1 / (1 - fine / 1000);
  }
  return 1 + fine / 1000;
}

module.exports = convertFineIntoRatio;
