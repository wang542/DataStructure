/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  while (num !== 0 || num > 0) {
    if (num % 2 == 1) {
      num -= 1;
    } else {
      num = num / 2;
    }
    count += 1;
  }

  return count;
};
