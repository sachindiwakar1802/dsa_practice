// class StackBasics {
//   constructor() {
//     this.items = [];
//   }

//   push(elem) {
//     this.items.push(elem);
//     return this.items;
//   }

//   pop() {
//     if (this.isEmpty()) return "Stack is empty";
//     return this.items.pop();
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   printAllElements() {
//     while (!this.isEmpty()) {
//       console.log(this.pop());
//     }
//   }
// }

// // create stack object
// let stack = new StackBasics();

// // push elements
// stack.push(9);
// stack.push(8);
// stack.push(7);
// stack.push(6);

// // pop one element
// stack.pop();

// // peek
// console.log(stack.peek()); // 7

// // check empty
// console.log(stack.isEmpty()); // false

// // print all elements
// stack.printAllElements();


class StackBasics {
  constructor() {
    this.items = [];
  }

  push(elem) {
    this.items.push(elem);
    return this.items;
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
printAllElements() {
  for (let i = this.items.length - 1; i >= 0; i--) {
    console.log(this.pop());
  }
}

}

// here we are making a new object by the name of stack
let stack = new StackBasics();

// here we are pushing new elements
stack.push(9);
stack.push(8);
stack.push(7);
stack.push(6);

// here we are popping the element
stack.pop();

// here we are checking the peek element
let peek = stack.peek();
console.log(peek); // 7

// checking whether stack is empty or not
let empty = stack.isEmpty();
console.log(empty); // false

// here we are just printing the stack elements
console.log(stack.items); // [9, 8, 7]

stack.printAllElements();

 