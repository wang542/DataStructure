/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
//use stack
//use for loop
//if element is bigger than top of stack
//keep poping the stack until current element is smaller than top of stack
//make the element right child of last popped element
//if element is not bigger, simply make it the left child.
var bstFromPreorder = function (preorder) {
  let root = new TreeNode(preorder[0]);
  let stack = [];
  stack.push(root);
  for (let i = 1; i < preorder.length; i++) {
    let current = null;
    //keep popping stack until the preorder element is smaller than top of stack
    //note the BST property
    while (stack.length !== 0 && preorder[i] > stack[stack.length - 1].val) {
      current = stack.pop();
    }
    //if current has a value, meaning the while loop was activated
    if (current !== null) {
      let newNode = new TreeNode(preorder[i]);
      current.right = newNode;
      stack.push(newNode);
    } else {
      //else the while loop was not activated
      //make the element in array the left child of top stack
      let newNode = new TreeNode(preorder[i]);
      stack[stack.length - 1].left = newNode;
      stack.push(newNode);
    }
  }

  return root;
};
