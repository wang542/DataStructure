/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//use stack
//the similar question was binary seach tree,
//this is just binary tree.

//Preorder Root,Left,Right
//Inorder Left,Root,Right;
//combine the two properties and use as refrence to determine the left subtree and right subtree
var buildTree = function (preorder, inorder) {
  const helper = (preIndex, inStart, inEnd, preorderArr, inorderArr) => {
    if (preIndex > preorderArr.length - 1 || inStart > inEnd) return null;

    let current = new TreeNode(preorderArr[preIndex]);
    let index;
    //determine the index of the current node in inorderArr,
    //elements on the left is the left subtree, element on the right is right subtree.
    for (let j = inStart; j <= inEnd; j++) {
      if (current.val === inorderArr[j]) {
        index = j;
      }
    }
    //somewhat similar to binary search an array
    current.left = helper(
      preIndex + 1,
      inStart,
      index - 1,
      preorderArr,
      inorderArr
    );

    //skip the number of elements that are suppose to be on the left subtree
    //use the inorderArr indexes to determine the number of elements to skip
    current.right = helper(
      preIndex + index - inStart + 1,
      index + 1,
      inEnd,
      preorderArr,
      inorderArr
    );

    return current;
  };

  let root = helper(0, 0, inorder.length - 1, preorder, inorder);

  return root;
};
