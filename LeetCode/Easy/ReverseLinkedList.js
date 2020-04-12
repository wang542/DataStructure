/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) {
    return head;
  }
  var stack = [];
  var currentNode = head;
  while (currentNode !== null) {
    stack.push(currentNode);
    currentNode = currentNode.next;
  }
  head = stack.pop();
  var curNode = head;
  while (stack.length > 0) {
    curNode.next = stack.pop();
    curNode = curNode.next;
  }

  curNode.next = null;
  return head;
};
