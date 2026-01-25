let q1 = [];
let q2 = [];

function pushStack(ele) {
  q1.push(ele);
}

function popStack() {
  if (q1.length === 0) {
    console.log("Stack empty");
    return;
  }

  let n = q1.length;

  for (let i = 0; i < n - 1; i++) {
    q2.push(q1.shift());
  }

  let ans = q1.shift();

  // swap
  let temp = q1;
  q1 = q2;
  q2 = temp;

  return ans;
}
// now i wanted to do the peak operation in the stack by usin g the two qeues 
function peekStack() {
  if (q1.length === 0) {
    return "Please push elements into the stack";
  }

  let n = q1.length;

  // move first n-1 elements
  for (let i = 0; i < n - 1; i++) {
    q2.push(q1.shift());
  }

  // top element (do NOT delete permanently)
  let top = q1.shift();

  // put it back into q2
  q2.push(top);

  // swap queues
  let temp = q1;
  q1 = q2;
  q2 = temp;

  return{ "the top  elemet is = ":top}
}


// TEST
pushStack(10);
pushStack(20);
pushStack(30);

console.log(popStack()); // 30


console.log(peekStack())
