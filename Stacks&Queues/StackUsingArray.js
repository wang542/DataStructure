class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.length - 1];
  }

  push(value) {
    const res = this.data.push(value);
  }

  pop() {
    const res = this.data.pop();
    return res;
  }
}
const myStack = new Stack();
myStack.peek();
myStack.push("ggle");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();
console.log(myStack);
