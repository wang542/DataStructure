/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

//Traverse the tree
//either recursively or iteratively
//record the value if within L R
var rangeSumBST = function (root, L, R) {
  let output = 0;

  var helper = function (root, L, R) {
    if (root === null) {
      return;
    }

    if (root.val >= L && root.val <= R) {
      output += root.val;
    }

    helper(root.left, L, R);
    helper(root.right, L, R);
  };

  helper(root, L, R);
  return output;
};
