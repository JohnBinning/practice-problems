class MinStack {
  list:number[];
  min:number[];
  constructor() {
      this.list = [];
      this.min = [];
  }

  push(val: number): void {
      if (!this.min.length) {
          this.min.push(val);
      } else {
          this.min.push(Math.min(val, this.min[this.min.length - 1]));
      }
      this.list.push(val);
  }

  pop(): void {
      this.list.pop();
      this.min.pop();
  }

  top(): number {
      return this.list[this.list.length - 1];
  }

  getMin(): number {
      return this.min[this.min.length - 1];
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

*/

// another one

interface ValuePair {
  value: number;
  minValue: number;
}

class MinStack2 {
  private stack: ValuePair[] = [];

  push(value: number): void {
    if (this.isEmpty()) {
      this.stack.push({ value: value, minValue: value });
      return;
    }
    const minValue = Math.min(this.getTopValuePair().minValue, value);
    this.stack.push({ value, minValue });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.getTopValuePair().value;
  }

  getMin(): number {
    return this.getTopValuePair().minValue;
  }

  getTopValuePair(): ValuePair {
    return this.stack[this.stack.length - 1]!;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}