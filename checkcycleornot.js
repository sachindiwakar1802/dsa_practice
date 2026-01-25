function Node(value) {
  this.value = value;
  this.next = null;
}

let head = new Node(0);
let first = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);
let fifth = new Node(5);

// linking nodes
head.next = first;
first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fourth

// cycle detection using Set
function hasCycle(head) {
  let current = head;
  let seenNodes = new Set();

  while (current !== null) {
    if (seenNodes.has(current)) {
      return true; // cycle found
    }
    seenNodes.add(current);
    current = current.next;
  }

  return false; // no cycle
}

console.log(hasCycle(head)); // false
