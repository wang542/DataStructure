/**
 * @param {number} n
 * @return {number}
 */

// [0,1,2,3,5,8,13]  c[i] = c[i-1]+c[i-2]
var climbStairsArray = function(n) {
  var res = [0, 1, 2];
  if (n <= 2) {
    return res[n];
  }
  for (let i = 3; i <= n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }

  return res[n];
};
var climbStairs = function(n) {
  let end = 0;
  let oneStep = 1;
  let twoStep = 2;
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  for (let i = 3; i <= n; i++) {
    end = oneStep + twoStep;
    let temp = twoStep;
    twoStep += oneStep;
    oneStep = temp;
  }

  return end;
};
