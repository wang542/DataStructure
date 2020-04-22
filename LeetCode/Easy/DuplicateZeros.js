/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let index = 0;
  let originalLen = arr.length;
  while (index < arr.length) {
    if (arr[index] === 0) {
      arr.splice(index + 1, 0, 0);
      index += 2;
    } else {
      index++;
    }
  }

  arr.splice(originalLen, arr.length - originalLen);
};
