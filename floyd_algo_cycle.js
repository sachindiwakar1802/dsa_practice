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


function hasCycle(head) {
  if (head === null) return false;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;          // 1 step
    fast = fast.next.next;    // 2 steps

    if (slow === fast) {
      return true; // cycle detected
    }
  }
  return false; // no cycle
}

console.log(hasCycle(head)); // false
