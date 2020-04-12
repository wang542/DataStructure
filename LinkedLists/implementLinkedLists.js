// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// };

class LinedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    //append to the tail of linkedlist
    //connect newNode as next of tail object
    //update tail to newNode
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    //connect head as the next as newNode
    //replace the connected newNode as head
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    //  if (index >= this.length) {
    //    return this.append(value);
    //  }
    const newNode = {
      value: value,
      next: null
    };
    const addingNode = this._traverseToIndex(index - 1);
    const holdingCell = addingNode.next;
    addingNode.next = newNode;
    newNode.next = holdingCell;

    //  console.log(addingNode);
    //  console.log("next", addingNode.next);
    this.length++;
  }

  remove(index) {
    const target = this._traverseToIndex(index - 1);
    const holdingCell = target.next.next;
    target.next = holdingCell;
    this.length--;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  _traverseToIndex(index) {
    let i = 0;
    let curNode = this.head;
    while (i !== index) {
      curNode = this.head.next;
      i++;
    }
    return curNode;
  }
}

const myLinkedList = new LinedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 19);
//console.log(myLinkedList);
//myLinkedList.remove(2);
myLinkedList.reverse();
console.log(myLinkedList);
