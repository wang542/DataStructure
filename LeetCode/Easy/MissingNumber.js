/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var sumShould = 0;
  var actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  for (let j = 0; j <= nums.length; j++) {
    sumShould += j;
  }

  return sumShould - actualSum;
};
