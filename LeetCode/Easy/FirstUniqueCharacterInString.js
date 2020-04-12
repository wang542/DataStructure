/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var hasher = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hasher.has(s[i])) {
      hasher.set(s[i], hasher.get(s[i]) + 1);
    } else {
      hasher.set(s[i], 1);
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (hasher.get(s[j]) === 1) {
      return j;
    }
  }

  return -1;
};
