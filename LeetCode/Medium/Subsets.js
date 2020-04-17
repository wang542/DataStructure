/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];

  var helper = function (current, choices, length) {
    if (current.length === length) {
      res.push(current.slice());
      return;
    }

    for (let j = 0; j < choices.length; j++) {
      current.push(choices[j]);
      //unlike permutations, [1,2,3] every iteration we only want options [1,2,3] -> [2,3]->[3]
      //because no duplicate, if 1 is already considered it should not be added back
      //in permutations element that has been considered is added back
      //because in permutations[1,2] is not equal to [2,1]
      //but in this question case [1,2] === [2,1]
      let newOptions = choices.slice(j + 1);
      helper(current, newOptions, length);
      current.pop();
    }
  };

  for (let i = 0; i <= nums.length; i++) {
    helper([], nums, i); // length 0,1,2,3
  }

  return res;
};
