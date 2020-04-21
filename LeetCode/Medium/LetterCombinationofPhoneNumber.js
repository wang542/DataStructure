/**
 * @param {string} digits
 * @return {string[]}
 */
//backtracking
//remember the three key to backtracking problem
//and define them, backtracking is piece of cake
var letterCombinations = function (digits) {
  let res = [];
  let map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  var helper = function (currentCombination, digitList) {
    if (digitList.length === 0) {
      res.push(currentCombination.slice());
      return;
    } else {
      let letterOptions = map[digitList[0]];
      let newOptions = digitList.substr(1);
      for (let i = 0; i < letterOptions.length; i++) {
        helper(currentCombination + letterOptions[i], newOptions);
      }
    }
  };
  if (digits) {
    helper("", digits);
  }

  return res;
};
