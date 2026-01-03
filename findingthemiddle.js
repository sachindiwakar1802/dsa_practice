// function node(value){
//   this.value = value;
//   this.next = null;
// }
// // now crearting a list 
// head = new node(1);
// first = new node(2);
// second = new node(3);
// third = new node(4);
// // joining the nodes 
// head.next = first;
// first.next = second;
// second.next = third;
// third.next = null;
// // now finding the moddle node from teh node by applying the slow and fast approach 
// let slow = head;
// let fast = head;

// while (fast !== null && fast.next !== null)
// {
//   slow = slow.next;
//   fast = fast.next;
// }
// console.log(slow);
// make node 
function Node(value) {
  this.value = value;
  this.next = null;
}

// create nodes
let head = new Node(1);
let first = new Node(2);
let second = new Node(3);
let third = new Node(4);

// join the nodes (✅ correct)
head.next = first;
first.next = second;
second.next = third;
third.next = null;

// find middle using array method
function middle(head) {
  let array = [];
  let current = head;

  while (current !== null) {
    array.push(current.value);
    current = current.next;
  }

  let mid = Math.floor(array.length / 2);
  console.log(array[mid]);
}

// call function
middle(head); // output: 3
