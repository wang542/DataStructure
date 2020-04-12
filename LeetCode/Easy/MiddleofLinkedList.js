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

//stack to keep node
//keep length(use array length), use length to find midpoint
//pop stack for mid times, the node on top of stack should be value
var middleNodeStacker = function (head) {
  if (!head) return null;
  var stacker = [];
  var root = head;

  while (root !== null) {
    stacker.push(root);
    root = root.next;
  }
  var mid = Math.floor(stacker.length / 2);
  return stacker[mid];
  /*if(stacker.length % 2 === 0){
       while(mid !== 1){
           stacker.pop();
           mid -=1;
       }
       return stacker.pop();
   }else{
       while(mid !== 0){
       stacker.pop();
       mid -=1;
       }
       return stacker.pop()
   }*/
};

var middleNode = function (head) {
  var slow = head;
  var fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
