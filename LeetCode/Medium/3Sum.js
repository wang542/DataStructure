/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumBruteForceSlightlyWrong = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return res;
};

var threeSum = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    let targetSum = 0 - nums[i];

    while (left < right) {
      if (nums[left] + nums[right] === targetSum) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left += 1;
        while (left < right && nums[right] === nums[right - 1]) right -= 1;
        left += 1;
        right -= 1;
      } else if (nums[left] + nums[right] < targetSum) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return res;
};
