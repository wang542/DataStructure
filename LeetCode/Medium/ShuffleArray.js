/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.arr;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
//Generate a random index, and swap within array
Solution.prototype.shuffle = function () {
  let copy = this.arr.slice();
  const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  for (let j = this.arr.length - 1; j >= 0; j--) {
    let randIdx = Math.floor(Math.random() * j);
    swap(copy, j, randIdx);
  }
  return copy;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
