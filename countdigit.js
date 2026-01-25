function count(n){
  let count = 0;
  while(n!=0){
    n = Math.floor(n/10);
    count++;  
  }
  return count;
}
let n = 1234;
console.log(count(n))
