/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var res = [];

  if (numRows === 0) {
    return res;
  }
  res.push([1]);

  for (let i = 1; i < numRows; i++) {
    var adder = [1];
    var previous = res[i - 1];
    for (let j = 1; j < i; j++) {
      adder.push(previous[j - 1] + previous[j]);
    }
    adder.push(1);
    res.push(adder);
  }

  return res;
};
