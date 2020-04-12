/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalRecurse = function(root) {
  var res = [];
  var head = root;

  traverse(head, res);
  return res;
};

var traverse = function(node, res) {
  if (node === null) {
    return;
  }

  traverse(node.left, res);
  res.push(node.val);
  traverse(node.right, res);

  return res;
};

var inorderTraversal = function(root) {
  var head = root;
  var res = [];
  var stacker = [];

  while (stacker.length > 0 || head !== null) {
    while (head !== null) {
      stacker.push(head);
      head = head.left;
    }

    head = stacker.pop();
    res.push(head.val);
    head = head.right;
  }

  return res;
};
