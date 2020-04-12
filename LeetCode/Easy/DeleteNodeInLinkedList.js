/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

//confusing question
//change the representation of node to be the next node.
//it's actually replicating the next node, current node still exists.

var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
