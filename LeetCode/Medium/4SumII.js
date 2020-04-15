/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */

/*
don't overthink this problem
think of it as Two Sum in pairs.
*/
var fourSumCount = function (A, B, C, D) {
  const map = {};
  let res = 0;

  for (let i of A) {
    for (let j of B) {
      let partSum = i + j;
      if (!map[partSum]) {
        map[partSum] = 1;
      } else {
        map[partSum] += 1;
      }
    }
  }
  for (let k of C) {
    for (let l of D) {
      let otherPart = k + l;
      if (map[-otherPart]) {
        res += map[-otherPart];
      }
    }
  }

  return res;
};
