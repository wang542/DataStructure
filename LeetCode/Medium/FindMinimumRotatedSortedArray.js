/**
 * @param {number[]} nums
 * @return {number}
 */
var findMinDetail = function (nums) {
  if (!nums || nums.length === 0) return -1;
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;
  if (nums[right] > nums[left]) {
    return nums[left];
  }

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return nums[left];
};

var findMin = function (nums) {
  if (!nums || nums.length === 0) reutrn - 1;
  if (nums.length === 1) return nums[0];
  let left = 0,
    right = nums.length - 1;
  if (nums[right] > nums[left]) return nums[left];

  //In a sorted array the previous element shouldn't be greater than the next element;
  //But in  a rotated array, [4,5,6,7,0,1,2], if mid is greater than last element
  //then min must be on right hand side
  //else it should be on left, just like a sorted array
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};
