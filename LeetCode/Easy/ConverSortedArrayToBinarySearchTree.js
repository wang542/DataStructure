/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  const left = sortedArrayToBST(nums.slice(0, mid));
  const right = sortedArrayToBST(nums.slice(mid + 1));

  root.left = left;
  root.right = right;

  return root;
};
