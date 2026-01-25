function sum(num){
  // base condition 
  if(num===0) return 0
 // how to perform the sum 
  return num + sum(num-1);
}
let num = 10;
console.log(sum(num));