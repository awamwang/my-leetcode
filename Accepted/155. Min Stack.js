// 155. Min Stack
//
// https://leetcode.com/problems/min-stack/description/
//
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.minStack = []

  return this
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)

  let len = this.minStack.length
  if (len === 0) {
    this.minStack.push(x)
  }
  let min = this.minStack[len - 1]
  if (x <= min) {
    this.minStack.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let v = this.stack.pop()
  let m = this.minStack[this.minStack.length - 1]
  if (v === m) {
    this.minStack.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack()
// obj.push(-2)
// obj.push(0)
// obj.push(-3)
// console.log(obj.getMin()) // -3
// obj.pop()
// console.log(obj.top())  // 0
// console.log(obj.getMin()) // -2

console.log(obj.getMin()) // -3
obj.push(-3)
console.log(obj.getMin()) // -2