/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  /*
   Each row must contain the digits 1-9 without repetition.
   Each column must contain the digits 1-9 without repetition.
   Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
   */

  let rowSet = new Set();
  let columnSet = new Set();
  let subSet = new Set();

  //row check
  for (let i = 0; i < board.length; i++) {
    //traverse each row to check each element
    for (let j = 0; j < board[0].length; j++) {
      //row
      let currentNum = board[i][j];
      if (currentNum !== ".") {
        currentNum = Number(currentNum);
        if (rowSet.has(currentNum)) {
          return false;
        } else {
          rowSet.add(currentNum);
        }
      }

      //column
      let columnNum = board[j][i];
      if (columnNum !== ".") {
        columnNum = Number(columnNum);
        if (columnSet.has(columnNum)) {
          return false;
        } else {
          columnSet.add(columnNum);
        }
      }

      //subBox
      let boxNum =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (boxNum !== ".") {
        boxNum = Number(boxNum);
        if (subSet.has(boxNum)) {
          return false;
        } else {
          subSet.add(boxNum);
        }
      }
    }
    rowSet.clear();
    columnSet.clear();
    subSet.clear();
  }

  //coulmn check
  //combined row check with column check; look for similarity
  /*
   for(let t=0;t<board.length;t++){
       for(let k=0;k<board[0].length;k++){
           //flip the k t index, so for loop traverse row number first while column stays the same
           let currentNum = board[k][t];
           if(currentNum === '.'){
               continue;
           }
           currentNum = Number(currentNum);
           if(currentNum <1 || currentNum >9 || set.has(currentNum)){
               return false;
           }else{
               set.add(currentNum);
           }
       }
       set.clear();
   }
   */

  //subChe

  return true;
};
