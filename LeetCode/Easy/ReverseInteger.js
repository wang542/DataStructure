/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x > 0x7fffffff) {
    return 0;
  }
  var negPos = 0;
  if (x < 0) {
    negPos = -1;
  } else {
    negPos = 1;
  }
  var cache = Number(
    Math.abs(x)
      .toString(10)
      .split("")
      .reverse()
      .join("")
  );
  if (cache > 0x7fffffff) {
    return 0;
  } else {
    return cache * negPos;
  }
};
