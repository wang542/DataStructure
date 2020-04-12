/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var hasher = new Map();
  hasher.set("I", 1);
  hasher.set("V", 5);
  hasher.set("X", 10);
  hasher.set("L", 50);
  hasher.set("C", 100);
  hasher.set("D", 500);
  hasher.set("M", 1000);

  var cacher = 0;

  for (let i = 0; i < s.length; i++) {
    if (hasher.get(s[i]) < hasher.get(s[i + 1])) {
      cacher -= hasher.get(s[i]);
    } else {
      cacher += hasher.get(s[i]);
    }
  }

  return cacher;
};
