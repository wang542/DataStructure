/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (nums.length === 0) {
    return false;
  }
  var hasher = new Map();
  for (let i = 0; i < nums.length; i++) {
    //console.log(target-nums[i])
    if (hasher.has(target - nums[i])) {
      return [hasher.get(target - nums[i]), i];
    } else {
      hasher.set(nums[i], i);
    }
  }
};
