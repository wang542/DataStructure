/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//Recursion
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  if (root.right === null) {
    return maxDepth(root.left) + 1;
  }
  if (root.left === null) {
    return maxDepth(root.right) + 1;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
