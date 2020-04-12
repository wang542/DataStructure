/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicateSort = function (nums) {
  nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return nums[i];
    }
  }
};

var findDuplicateSet = function (nums) {
  var setter = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!setter.has(nums[i])) {
      setter.add(nums[i]);
    } else {
      return nums[i];
    }
  }
};
var findDuplicate = function (nums) {
  nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return nums[i];
    }
  }
};
