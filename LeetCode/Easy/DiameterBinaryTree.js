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
var diameterOfBinaryTree = function (root) {
  if (root === null) {
    return 0;
  }

  var best = 0;
  var helper = function (node) {
    if (node === null) {
      return 0;
    }

    var left = helper(node.left);
    var right = helper(node.right);
    best = Math.max(best, left + right);

    return Math.max(left, right) + 1;
  };

  helper(root);

  return best;
};
