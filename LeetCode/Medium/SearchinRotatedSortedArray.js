/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchNaive = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
};

//Find the index of the smallest index to determine the pivot point(the unsorted point)
//check if the target is bigger than the smallest index and smaller than the last index,
//if is then that means the target lies in the right half of the array,
//else target is in the left half, set the boundary either from 0 to smallest, or smallest to end of array
//just regular binary search then
var search = function (nums, target) {
  if (!nums || nums.length === 0) return -1;
  if (nums.length === 1 && target === nums[0]) return 0;
  let minIdx = findMin(nums);
  let left = 0;
  let right = nums.length - 1;
  if (target >= nums[minIdx] && target <= nums[nums.length - 1]) {
    left = minIdx;
  } else {
    right = minIdx;
  }

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
