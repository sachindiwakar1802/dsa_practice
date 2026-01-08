function balancedstr(str){
  let  R  = 0 ;
  let  L = 0;
  let count = 0;
  for(let i=0;i<str.length;i++){
     if(str[i]==="R"){
    R++;
     }
     else{
      L++;
     }
     if(L===R){
      count++
      R =0;
      L=0;
     }
  }
  return count;
}
let str = "RL";
console.log(balancedstr(str));