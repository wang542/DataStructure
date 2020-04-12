/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var res = [];

  helper(res, "", 0, 0, n);
  return res;
};

var helper = function (res, current, open, close, n) {
  if (current.length === n * 2) {
    res.push(current.slice());
    return;
  }

  if (open < n) {
    helper(res, current + "(", open + 1, close, n);
  }
  if (close < open) {
    helper(res, current + ")", open, close + 1, n);
  }
};
