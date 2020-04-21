/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let map = new Map();
  let jewels = 0;
  for (let i = 0; i < J.length; i++) {
    map.set(J[i], 1);
  }
  for (let j = 0; j < S.length; j++) {
    if (map.has(S[j])) {
      jewels += 1;
    }
  }

  return jewels;
};
