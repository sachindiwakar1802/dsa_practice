function node(value){
this.value = value;
this.next = null;
}

// now creating the linkedlist by joing the nodes 
// craeting the node with the value
let head = new node(4);
let first = new node(5);
let secondnode = new node(6);
let third = new node(8)

//now attaching the node with the each other node 
head.next = first;
first.next = secondnode;
secondnode.next = third;
third.next = null;
// now insertind the node at the particular position let suppose at the 
// creating newnode
let newnode = new node(1000);
let index = 3;
let currect = head;
for(let i=0;i<index-1;i++){
  currect = currect.next;
}
newnode.next = currect.next;
currect.next = newnode
console.log(first);

// add the corner cases