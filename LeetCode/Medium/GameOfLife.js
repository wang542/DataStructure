/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//copy the original board so we have a reference
//traverse each index and check its neighbor
//match the rules and change accodringly;
var gameOfLife = function (board) {
  //don't simply equate copy and board, it will be a reference.
  //when board changes, copy will change too.
  //actually read each value of board and put in copy
  //-----Make a copy of original board
  let copy = [...Array(board.length)].map((x) => Array(board[0].length));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      copy[i][j] = board[i][j];
    }
  }
  //-------------------------------------------

  for (let k = 0; k < board.length; k++) {
    for (let t = 0; t < board[0].length; t++) {
      let liveNeighbor = helper(copy, k, t);
      console.log(liveNeighbor);
      /*
           Any live cell with fewer than two live neighbors dies, as if caused by under-population.
           Any live cell with two or three live neighbors lives on to the next generation.
           Any live cell with more than three live neighbors dies, as if by over-population..
           Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
           */

      if (board[k][t] === 1) {
        if (liveNeighbor < 2 || liveNeighbor > 3) {
          board[k][t] = 0;
        }
      }
      if (board[k][t] === 0) {
        if (liveNeighbor === 3) {
          board[k][t] = 1;
        }
      }
    }
  }
};

var helper = function (grid, row, column) {
  let lives = 0;
  let neighborComb = [
    [-1, 0],
    [+1, 0],
    [0, -1],
    [0, +1],
    [-1, -1],
    [+1, +1],
    [-1, +1],
    [+1, -1],
  ];
  for (let i = 0; i < neighborComb.length; i++) {
    if (
      row + neighborComb[i][0] >= 0 &&
      row + neighborComb[i][0] < grid.length &&
      column + neighborComb[i][1] >= 0 &&
      column + neighborComb[i][1] < grid[0].length
    ) {
      if (grid[row + neighborComb[i][0]][column + neighborComb[i][1]] === 1) {
        lives += 1;
      }
    }
  }
  return lives;
};
