function node(value){
  this.value = value;
 this.next = null
}
// adding a node at the last (end)
let firstnode = new node(50);
let secondnode = new node(5);
let midnode = new node(40);
firstnode.next = secondnode;
secondnode.next = midnode;
midnode.next = null;

// now adding an node atvthe last 
//create a node 
let current = firstnode;
let newnode = new node(8);
while(current.next!==null){
current = current.next;
}
// now we got the currect value so now attaching the node here
current.next  = newnode;

console.log(secondnode)

