/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelfDivision = function (nums) {
  let total = 1;
  for (let i = 0; i < nums.length; i++) {
    total *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    nums[j] = total / nums[j];
  }

  return nums;
};

var productExceptSelfExtraStorage = function (nums) {
  let left = new Array(nums.length);
  let right = new Array(nums.length);
  let res = new Array(nums.length);
  left[0] = 1;
  right[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    right[j] = right[j + 1] * nums[j + 1];
  }
  for (let k = 0; k < nums.length; k++) {
    res[k] = left[k] * right[k];
  }
  return res;
};

var productExceptSelf = function (nums) {
  let res = new Array(nums.length);
  res[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  //console.log(res);
  let rightRollingSum = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] = res[j] * rightRollingSum;
    rightRollingSum *= nums[j];
  }

  return res;
};
