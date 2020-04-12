/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var res = [1];

  if (rowIndex === 0) {
    return res;
  }

  for (let i = 1; i <= rowIndex; i++) {
    var adder = [1];
    var previous = res[i - 1];
    for (let j = 1; j < i; j++) {
      adder.push(previous[j - 1] + previous[j]);
    }
    adder.push(1);
    res.push(adder);
  }
  return res.pop();
};
