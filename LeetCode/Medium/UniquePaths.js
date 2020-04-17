/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsRecursion = function (m, n) {
  let startN = 0;
  let startM = 0;
  let res = 0;
  var helper = function (currentN, currentM, finishM, finishN) {
    if (currentN === finishN && currentM === finishM) {
      res += 1;
      return;
    }
    /*
       if(currentN >= finishN){
           helper(currentN,currentM+1,finishM,finishN);
       }
       
       if(currentM >= finishM){
           helper(currentN+1,currentM,finishM,finishN);
       }
       */
    if (currentM < finishM) {
      helper(currentN, currentM + 1, finishM, finishN);
    }
    if (currentN < finishN) {
      helper(currentN + 1, currentM, finishM, finishN);
    }
  };
  helper(0, 0, m - 1, n - 1);

  return res;
};

/*DP
at every stop, the ways of getting here is the sum of ways of left and top parent;
[[1,1,1]
[1,2,3]]
THe last element in the matrix is the total way of getting to the finish point
every element in first column and first row is one because robot only moves down or rigth
and for positions on first column and row there's only one way of direction to get there, 
so each stop is only 1 
*/
var uniquePaths = function (m, n) {
  let res = [...Array(n)].map((x) => Array(m));

  for (let i = 0; i < m; i++) {
    res[0][i] = 1;
  }

  for (let j = 0; j < n; j++) {
    res[j][0] = 1;
  }

  for (let k = 1; k < n; k++) {
    for (let t = 1; t < m; t++) {
      res[k][t] = res[k - 1][t] + res[k][t - 1];
    }
  }

  return res[n - 1][m - 1];
};
