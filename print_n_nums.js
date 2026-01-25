function print(num){
  // base condition
  if(num===0) return;
  //print numbers when all function complete it's stack
  console.log(num);
  // here this function will run again and again till match the base condition 
  print(num-1);
}
let num = 10;
print(num)
