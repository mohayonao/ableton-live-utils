module.exports = function(fine) {
  var sign = fine < 0 ? -1 : +1;
  var ratio = 1 + Math.abs(fine) / 1000;

  return sign * Math.log(ratio) * Math.LOG2E * 12 * 100;
};
