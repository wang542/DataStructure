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
var isPalindrome = function(head) {
  var fA = head;
  var store = [];

  while (fA !== null) {
    store.push(fA.val);
    fA = fA.next;
  }

  var i = 0;
  var j = store.length - 1;
  while (i < j) {
    if (store[i] !== store[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};
