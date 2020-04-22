/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbersA = function (nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      res += 1;
    }
  }

  return res;
};

var findNumbers = function (nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    let time = 0;
    let copy = nums[i];
    while (copy >= 1) {
      copy = copy / 10;
      time += 1;
    }

    if (time % 2 === 0) {
      res += 1;
    }
  }

  return res;
};
