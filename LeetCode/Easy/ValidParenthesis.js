/**
 * @param {string} s
 * @return {boolean}
 */

//"()[]{}"
var isValid = function(s) {
  if (s === "") {
    return true;
  }

  var hasher = new Map();
  hasher.set("}", "{");
  hasher.set(")", "(");
  hasher.set("]", "[");

  var stacker = [];

  for (let i = 0; i < s.length; i++) {
    if (hasher.has(s[i])) {
      var stackTop = stacker.pop();
      if (stackTop !== hasher.get(s[i])) {
        return false;
      }
    } else {
      stacker.push(s[i]);
    }
  }

  if (stacker.length === 0) {
    return true;
  } else {
    return false;
  }
};
