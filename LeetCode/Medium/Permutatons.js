/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var res = [];

  helper(nums, [], res);

  return res;
};

var helper = function (nums, arr, res) {
  if (nums.length === 0) {
    res.push(arr.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
    var newoption = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
    helper(newoption, arr, res);
    arr.pop();
  }
};
