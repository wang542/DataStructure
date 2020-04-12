/**
 * @param {number[]} nums
 * @return {number}
 */

//Math Approach
//2 times the sum of unique elements in array - sum of original array = single element
//everyone is in pairs except the one number, an array with everyone in pairs minus original array would result the number

//HashMap
//Traverse the array, record appearance
//if there is a number with only one appearance then that's answer

var singleNumberHashMap = function(nums) {
  var hashMap = Object.create(null);
  var res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      hashMap[nums[i]] = hashMap[nums[i]] + 1;
    } else {
      hashMap[nums[i]] = 1;
    }
  }

  for (let [key, value] of Object.entries(hashMap)) {
    if (value === 1) {
      return key;
    }
  }
};

var singleNumber = function(nums) {};

var summer = function(arr) {
  return arr.reduce((num, acc) => num + acc, 0);
};
