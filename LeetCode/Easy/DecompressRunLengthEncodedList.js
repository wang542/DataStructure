/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let res = [];

  for (let i = 0; i < nums.length; i += 2) {
    let times = nums[i];
    let elements = nums[i + 1];
    while (times !== 0) {
      res.push(elements);
      times -= 1;
    }
  }

  return res;
};
