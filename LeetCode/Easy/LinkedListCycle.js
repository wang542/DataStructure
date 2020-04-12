/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//traverse the linked list
//record visited node, if the node has been visited return true
//don't check value, node may have same value
//check the node itself
var hasCycle = function(head) {
  var HashMap = new Map();
  while (head !== null) {
    if (HashMap.has(head)) {
      return true;
    } else {
      HashMap.set(head, 1);
    }
    head = head.next;
  }
  return false;
};
