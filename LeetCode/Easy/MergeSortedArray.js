/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (nums2.length === 0 || !nums2) {
    return;
  }

  let left = m - 1;
  let right = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (right < 0) {
      break;
    }
    if (nums1[left] > nums2[right]) {
      nums1[i] = nums1[left];
      left--;
    } else {
      nums1[i] = nums2[right];
      right--;
    }
  }
};
