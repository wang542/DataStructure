/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricRecurse = function(root) {
  return isMirror(root, root);
};

var isMirror = function(tree1, tree2) {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;

  return (
    tree1.val === tree2.val &&
    isMirror(tree1.left, tree2.right) &&
    isMirror(tree1.right, tree2.left)
  );
};

var isSymmetric = function(root) {
  var queue = [];

  queue.push(root);
  queue.push(root);

  while (queue.length > 0) {
    var node1 = queue.shift();
    var node2 = queue.shift();

    if (node1 === null && node2 === null) continue;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;

    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }

  return true;
};
