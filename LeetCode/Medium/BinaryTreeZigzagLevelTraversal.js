/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//use BFS with modification, shift and push depending on level
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [];
  let res = [];
  let head = root;
  queue.push(head);
  let level = false;

  while (queue.length > 0) {
    let size = queue.length;
    let currentLevel = [];
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      if (level) {
        currentLevel.unshift(current.val);
      } else {
        currentLevel.push(current.val);
      }

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    level = !level;
    res.push(currentLevel);
  }

  return res;
};
