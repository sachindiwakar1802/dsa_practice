function Node(value){
  this.value = value;
  this.next = null;
}

// create list
let head = new Node(6);
let first = new Node(10);
let second = new Node(100);

head.next = first;
first.next = second;

// get node at index
let index = 2;
let current = head;

for (let i = 0; i < index; i++) {
  if (current === null) break;
  current = current.next;
}

console.log(current);
