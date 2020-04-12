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

/*
BFS
use queue;
think of template for BFS traversal
*/
var levelOrder = function (root) {
  let res = [];
  if (root === null) {
    return res;
  }

  let BFSQ = [];
  BFSQ.push(root);
  while (BFSQ.length > 0) {
    let repeat = BFSQ.length;
    let current = [];
    for (let i = 0; i < repeat; i++) {
      let currentNode = BFSQ.shift();
      current.push(currentNode.val);
      if (currentNode.left !== null) {
        BFSQ.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        BFSQ.push(currentNode.right);
      }
    }
    res.push(current);
  }

  return res;
};
