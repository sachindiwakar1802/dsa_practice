function node(value){
  this.value = value;
  this.next = null;
}
// list A 
let headA = new node(1);
let firstA = new node(2);
let secondA = new node(3);
let thirdA = new node(4);
let fourthA = new node(5);
let fifthA  = new node(6);
// list B 
let headB = new node(11);
let firstB = new node(12);
let secondB = new node(13);
let thirdB = new node(14);
// now linking the nodes 
headA.next = firstA;
firstA.next =secondA;
secondA.next = thirdA;
thirdA.next = fourthA;
fourthA.next = fifthA;
//now joing the B list 
headB.next = firstB;
firstB.next = secondB;
secondB.next = thirdB;
thirdB.next = secondA;
// now checking the intersection 
function intersection(headA, headB) {
  let store = new Set();
  // store all nodes of list A
  while (headA !== null) {
    store.add(headA);
    headA = headA.next;
  }
  // check nodes of list B
  while (headB !== null) {
    if (store.has(headB)) {
      return headB; // ✅ intersection found
    }
    headB = headB.next;
  }
  return null; // ❌ no intersection
}
console.log( intersection(headA,headB))