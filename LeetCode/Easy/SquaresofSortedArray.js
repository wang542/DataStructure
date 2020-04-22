/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let res = [];
  for (let i = 0; i < A.length; i++) {
    res.push(A[i] * A[i]);
  }

  res.sort((a, b) => {
    return a - b;
  });
  return res;
};
