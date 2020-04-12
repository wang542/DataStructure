/**
 * @param {number[]} nums
 * @return {number}
 */

//DP
var rob = function(nums) {
  if (nums.length === 0) return 0;
  var res = [0, nums[0]];

  for (let i = 1; i < nums.length; i++) {
    res[i + 1] = Math.max(res[i], res[i - 1] + nums[i]);
  }

  return res.pop();
};
