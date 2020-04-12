/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Optimal Hashmap, if they are anagram, the letters can cancel each other out in hashmap counter +1 -1
var isAnagramArray = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var srepo = s.split("");
  var trepo = t.split("");
  srepo.sort();
  trepo.sort();
  //check for length

  for (let i = 0; i < srepo.length; i++) {
    if (srepo[i] !== trepo[i]) {
      return false;
    }
  }

  return true;
};

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var hasher = Object.create(null);

  for (let i = 0; i < s.length; i++) {
    if (hasher[s[i]]) {
      hasher[s[i]] = hasher[s[i]] + 1;
    } else {
      hasher[s[i]] = 1;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (hasher[t[j]]) {
      hasher[t[j]] = hasher[t[j]] - 1;
    } else {
      return false;
    }
  }

  for (let [key, value] of Object.entries(hasher)) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
};
