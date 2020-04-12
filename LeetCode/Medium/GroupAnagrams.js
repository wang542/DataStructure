/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var res = [];
  var mapper = new Map();

  for (let word of strs) {
    var chars = word.split("").sort().join("");

    if (!mapper.has(chars)) {
      mapper.set(chars, []);
    }
    var cache = mapper.get(chars);
    cache.push(word);
    mapper.set(chars, cache);
  }

  for (let value of mapper.values()) {
    res.push(value);
  }

  return res;
};
