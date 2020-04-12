/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stacker = [];
  this.minNum = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stacker.push(x);
  if (x < this.minNum) {
    this.minNum = x;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  var popper = this.stacker.pop();
  this.length -= 1;
  if (popper === this.minNum) {
    this.minNum = Math.min(...this.stacker);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stacker[this.stacker.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minNum;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.length = 0;
  this.min = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.length += 1;
  if (x < this.min) {
    this.min = x;
  }
  this.stack.push({ value: x, min: this.min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.length -= 1;
  if (this.length > 0) {
    this.min = this.stack[this.length - 1].min;
  } else {
    this.min = Number.MAX_VALUE;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
