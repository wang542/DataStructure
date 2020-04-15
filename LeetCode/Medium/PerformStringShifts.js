/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  //traverse the matrix to calculate the final direction and distance
  //remember the left and right movement calcels out each other
  let direction = 0;
  for (let i = 0; i < shift.length; i++) {
    if (shift[i][0] == 0) {
      direction -= shift[i][1];
    } else {
      direction += shift[i][1];
    }
  }
  let right;
  let left;
  //calculate the pivot point, use % to get the pivot if distance is larger than s.length
  let pivot = Math.abs(direction) % s.length;

  //check the direction, if direction is negative then shift left, positive then shift right
  if (direction === Math.abs(direction)) {
    //shift right, slice the string from 0 up to pivot, slice from pivot to end
    let cut = s.length - pivot;
    left = s.slice(0, cut);
    right = s.slice(cut);
  } else {
    //shift left, same principle as shift right
    left = s.slice(0, pivot);
    right = s.slice(pivot);
  }
  //join the sliced string together, but right first then left
  let res = right + left;
  return res;
};
