/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
Pseudo:
traverse the matrix, once we meet a 1, turn every neighbor to 0.
so we don't count the island multiple times
*/
var numIslands = function (grid) {
  if (grid.length === 0 || grid === null) return 0;

  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        islands += 1;
        helper(grid, i, j);
      }
    }
  }

  return islands;
};

var helper = function (grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  ) {
    return;
  }

  grid[i][j] = "0";

  helper(grid, i - 1, j);
  helper(grid, i + 1, j);
  helper(grid, i, j - 1);
  helper(grid, i, j + 1);

  return;
};
