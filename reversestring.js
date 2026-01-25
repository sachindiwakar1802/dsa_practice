function node(value){
  this.value = value;
  this.next = null;
}

let head = new node(0);
let first = new node(1);
let second = new node(2);
let third = new node(3);
let fourth = new node(4);

head.next = first;
first.next = second;
second.next = third;
third.next = fourth;

// now reverse the string ;
let prev = null;
let current = head;
let temp;
while(current!==null){
  temp=current.next;
  current.next = prev;
  prev = current;
  current = temp;
}
head = prev; 
console.log(head);
