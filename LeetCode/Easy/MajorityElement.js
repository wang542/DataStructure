/**
 * @param {number[]} nums
 * @return {number}
 */

//Optimal Sort, when you sort, the optimal element will definitely be in at least middle
var majorityElementHashMap = function(nums) {
  var hashMap = Object.create(null);

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      hashMap[nums[i]] = hashMap[nums[i]] + 1;
    } else {
      hashMap[nums[i]] = 1;
    }
  }

  for (let [key, value] of Object.entries(hashMap)) {
    if (value > nums.length / 2) {
      return key;
    }
  }
};

var majorityElement = function(nums) {
  nums.sort();
  var indx = Math.floor(nums.length / 2);
  return nums[indx];
};
