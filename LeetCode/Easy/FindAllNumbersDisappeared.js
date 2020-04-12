/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  var seter = new Set();
  var res = [];
  for (let i = 0; i < nums.length; i++) {
    seter.add(nums[i]);
  }

  for (let j = 1; j <= nums.length; j++) {
    if (!seter.has(j)) {
      res.push(j);
    }
  }
  return res;
};
