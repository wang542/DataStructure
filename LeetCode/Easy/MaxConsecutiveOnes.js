/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxConsec = Number.MIN_VALUE;
  let currentConsec = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentConsec += 1;
    } else {
      maxConsec = Math.max(currentConsec, maxConsec);
      currentConsec = 0;
    }
  }

  //in case that the array only has one elemnt, the else in for loop won't reach
  //so return max here, just in case
  return Math.max(maxConsec, currentConsec);
};
