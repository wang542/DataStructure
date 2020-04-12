/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelfTwoArray = function (nums) {
  var L = Array(nums.length).fill(1);
  var R = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  }
  for (let j = R.length - 2; j >= 0; j--) {
    R[j] = R[j + 1] * nums[j + 1];
  }

  for (let k = 0; k < L.length; k++) {
    L[k] *= R[k];
  }

  return L;
};

var productExceptSelf = function (nums) {
  var L = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  }
  let R = 1;
  for (let j = L.length - 1; j >= 0; j--) {
    L[j] *= R;
    R *= nums[j];
  }
  return L;
};
