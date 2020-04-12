/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  var resS = cleaner(S).join("");
  var resT = cleaner(T).join("");
  return resS === resT ? true : false;
};

var cleaner = function (str) {
  var res = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      if (res.length > 0) {
        res.pop();
      }
    } else {
      res.push(str[i]);
    }
  }
  return res;
};
