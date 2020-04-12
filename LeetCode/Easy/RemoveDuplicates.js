/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  for (let i = 0; i < nums.length - 1; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      continue;
    }
    i++;
  }
};
