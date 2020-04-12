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

//use two linkedlist, odd and even
// then link the odd and even linked list together
var oddEvenList = function (head) {
  if (head === null) return null;
  var odd = head;
  var even = head.next;
  var evenHead = even;
  while (even !== null && even.next !== null) {
    //weave through the nodes,
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  //link the even linkedlist to the tail of odd list
  odd.next = evenHead;

  return head;
};
