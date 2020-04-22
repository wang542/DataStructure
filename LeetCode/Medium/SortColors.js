/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColorsNaive = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
};

//keep track of where 0 and 2 should be
//similar idea with MoveZero question
var sortColors = function (nums) {
  if (nums.length === 0 || nums.length === 1) return;
  let nextZeroIndex = 0;
  let end = nums.length - 1;
  let currentIndex = 0;

  while (currentIndex <= end) {
    if (nums[currentIndex] === 0) {
      nums[currentIndex] = nums[nextZeroIndex];
      nums[nextZeroIndex] = 0;
      nextZeroIndex++;
      currentIndex++;
    } else if (nums[currentIndex] === 2) {
      nums[currentIndex] = nums[end];
      nums[end] = 2;
      end--;
    } else {
      currentIndex++;
    }
  }
};
