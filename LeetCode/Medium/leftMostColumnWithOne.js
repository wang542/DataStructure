/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
//Since the matrix is sorted, start from top right corner and traverse down or left;
//if the current elemnt is 0 then go down, note if current elemnt is 0 then rest element in the
//same row is 0
//if the current elemnet is 1 then traverse left there could be another 1 in the same row.
var leftMostColumnWithOne = function (binaryMatrix) {
  let row, column;
  [row, column] = binaryMatrix.dimensions();
  let index = column;
  let i = 0;
  let j = column - 1;
  while (i < row && j >= 0) {
    if (binaryMatrix.get(i, j) === 0) {
      i += 1;
    } else {
      index = Math.min(j, index);
      j -= 1;
    }
  }

  return index === column ? -1 : index;
};
