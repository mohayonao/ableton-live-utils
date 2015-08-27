module.exports = function(fine) {
  if (fine < 0) {
    return 1 / (1 - fine / 1000);
  }
  return 1 + fine / 1000;
};
