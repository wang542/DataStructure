/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var fA = headA;
  var fB = headB;

  while (fA !== fB) {
    if (fA === null) {
      fA = headB;
    } else {
      fA = fA.next;
    }
    if (fB === null) {
      fB = headA;
    } else {
      fB = fB.next;
    }
  }

  if (fA === fB) {
    return fA;
  } else {
    return null;
  }
};
