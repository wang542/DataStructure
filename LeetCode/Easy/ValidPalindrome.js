/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === "") {
    return true;
  }

  let processedString = s.replace(/\W/g, "");
  let reversed = processedString
    .split("")
    .reverse()
    .join("");

  if (processedString.toLowerCase() !== reversed.toLowerCase()) {
    return false;
  } else {
    return true;
  }
};
