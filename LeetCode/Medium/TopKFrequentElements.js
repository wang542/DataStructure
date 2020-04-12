/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  //build hashmap
  let mapper = {};
  let arr = [];
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (mapper[nums[i]]) {
      mapper[nums[i]] += 1;
    } else {
      mapper[nums[i]] = 1;
    }
  }
  //convert to array
  for (let [k, v] of Object.entries(mapper)) {
    arr.push([k, v]);
  }
  //sort array
  arr.sort((a, b) => {
    return b[1] - a[1];
  });
  //print k element
  for (let j = 0; j < k; j++) {
    res.push(arr[j][0]);
  }
  return res;
};
