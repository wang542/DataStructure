/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  var row = matrix.length;
  var column = matrix[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = i; j < column; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let k of matrix) {
    var head = 0;
    var tail = column - 1;
    while (head < tail) {
      var temp = k[head];
      k[head] = k[tail];
      k[tail] = temp;
      head += 1;
      tail -= 1;
    }
  }
};
