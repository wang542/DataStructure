/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null;

  var right = new TreeNode();
  var left = new TreeNode();

  right = invertTree(root.right);
  left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
};
