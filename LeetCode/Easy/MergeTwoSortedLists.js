/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  var fake_node = new ListNode(null);
  var temp = fake_node;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;

    if (l1 != null) {
      temp.next = l1;
    }
    if (l2 != null) {
      temp.next = l2;
    }
  }

  return fake_node.next;
};
