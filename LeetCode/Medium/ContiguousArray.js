/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Brute Force
  double for loop, traverse ever possible subarray and record ones and zeros
  update the maxLength if the ones and zeros number are more

HashMap
  use variable count, if nums[i]==1 count +=1, if nums[i]==0 count -=1;
  record count and index to hashMap at each element position
  if the count at two element position equal to each other 
  means between the two elements there are equal number of 0 and 1
  Note: init hashMap with count=0,index=-1
  since count start at 0, if after several traverse count return to 0, we have a beginning point to refrence  
*/
var findMaxLengthBrute = function (nums) {
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    let zero = 0;
    let one = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] == 1) {
        one += 1;
      } else {
        zero += 1;
      }
      if (zero == one) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
};

var findMaxLength = function (nums) {
  const mapper = new Map();
  mapper.set(0, -1);
  let maxLen = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count += 1;
    } else {
      count -= 1;
    }

    if (mapper.has(count)) {
      maxLen = Math.max(maxLen, i - mapper.get(count));
    } else {
      mapper.set(count, i);
    }
  }

  return maxLen;
};
