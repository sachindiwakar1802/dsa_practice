function node(value){
  this.value = value;
  this.next = this.next;
}
//creating node with the value
let head = new node(3);
let first = new node(4);
let second = new node(7);
let third = new node(2);
//now joining the nodes to each other
head.next = first;
first.next =second;
second.next = third;
third.next = null;
//now deleteing teh particular node 
let current = head;
let deleteingindex = 2;
for(let i=0;i<deleteingindex-1;i++){
    current = current.next
}
current.next = current.next.next;
console.log(head)

// now thing about the corner cases 
