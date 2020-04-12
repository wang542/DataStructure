/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var res = [];

  if (nums1.length === 0 || nums2.length === 0) return res;

  var hasher = new Map();

  for (let i = 0; i < nums1.length; i++) {
    if (hasher.has(nums1[i])) {
      hasher.set(nums1[i], hasher.get(nums1[i]) + 1);
    } else {
      hasher.set(nums1[i], 1);
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    if (hasher.has(nums2[j]) && hasher.get(nums2[j]) >= 1) {
      res.push(nums2[j]);
      hasher.set(nums2[j], hasher.get(nums2[j]) - 1);
    }
  }

  return res;
};
