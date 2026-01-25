function node(value){
  this.value = value;
  this.next = null;
}
let head = new node(1);
let first=new node(2);
let second = new node(3);
let third = new node(6);
let fourth = new node(5);
let fifth = new node(6);
// now joining the list 
head.next = first;
first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = null;
// now removing the particular value or node 
function remove(head,value){
let sentinel = new node();
sentinel.next = head;
let prev = sentinel;
while(prev!==null && prev.next!==null){
  if(prev.next.value === value){
prev.next = prev.next.next;
  }
  else{
    prev = prev.next;
  };
};
// next line important
return sentinel.next;
};
console.log(remove(head,3));