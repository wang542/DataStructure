//Last in First Out

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    console.log(this.top);
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const newTop = this.top.next;
    this.top = newTop;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push("ggle");
myStack.push("udemy");
myStack.push("discord");
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
