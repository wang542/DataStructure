/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var res = n;
  var visited = {};

  while (res > 1) {
    var nElement = res
      .toString()
      .split("")
      .map(Number);
    res = nElement.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);

    if (visited[res] === undefined) {
      visited[res] = true;
    } else {
      return false;
    }
  }

  if (res === 1) {
    return true;
  } else {
    return false;
  }
};
