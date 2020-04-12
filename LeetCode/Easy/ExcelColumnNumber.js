/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var res = 0;
  for (let i = 0; i < s.length; i++) {
    res *= 26;
    res += s[i].charCodeAt(0) - 64;
  }

  return res;
};
