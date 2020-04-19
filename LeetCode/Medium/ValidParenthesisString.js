/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let stack = [];
  let starstack = [];
  let map = {
    ")": "(",
    "*": 0,
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    }
    if (s[i] === ")") {
      if (stack.length === 0) {
        if (starstack.length === 0) {
          return false;
        }
        starstack.pop();
      } else {
        stack.pop();
        /*
               let cache = stack.pop()
           if(cache !== map[s[i]]){
               console.log(1);
               return false;
           }*/
      }
    }
    if (s[i] === "*") {
      starstack.push(i);
    }
  }

  while (stack.length !== 0 && starstack.length !== 0) {
    let parentIndex = stack.pop();
    let starIndex = starstack.pop();
    if (parentIndex > starIndex) {
      return false;
    }
  }

  return stack.length === 0 ? true : false;
};
