/**
 * @param {number[]} height
 * @return {number}
 */

//Brute Foce
//consider every pair of area
var maxAreaBruteForce = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let currentArea = Math.min(height[i], height[j]) * (j - i);
      max = Math.max(max, currentArea);
    }
  }

  return max;
};

//Use Two pointers
//since the height is limited by shorter height
//move the shorter line at every turn
//until the two pointers meet
//there's no benefit of moving longer line since the area will only reduce if move longer line
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let current = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, current);
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maxArea;
};
