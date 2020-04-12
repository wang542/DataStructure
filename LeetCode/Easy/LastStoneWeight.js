/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => {
      return a - b;
    });
    let heavy = stones.pop();
    let secheavy = stones.pop();
    let newstone = heavy - secheavy;
    if (newstone > 0) {
      stones.push(newstone);
    }
  }
  if (stones.length === 1) {
    return stones[0];
  } else {
    return 0;
  }
};
