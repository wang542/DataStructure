/**
 * @param {number[][]} grid
 * @return {number}
 */
//Similar to unique path
//classic dp, every index is the itself+ min of last option
var minPathSum = function (grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }
  for (let i = 1; i < grid[0].length; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (let j = 1; j < grid.length; j++) {
    grid[j][0] += grid[j - 1][0];
  }

  for (let m = 1; m < grid.length; m++) {
    for (let n = 1; n < grid[0].length; n++) {
      grid[m][n] += Math.min(grid[m - 1][n], grid[m][n - 1]);
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};
