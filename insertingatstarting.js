function node (data){
  this.data = data;
  this.next = null;
}

let head = new node (12);
let mid = new node (13);
head.next = mid;
mid.next = null;
let newnode  = new node (25);

newnode.next = head;
head = newnode;

console.log(newnode)