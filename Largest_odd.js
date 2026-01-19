function largest_odd_num(str){
  let n =str.length-1;
  while(n>0){
    if(Number(str[n])%2==1){
      return str.substring(0,n+1)
  }
  n--;
}
return "not a single odd number in the string !!!";
}
let str = "88888888888888";
let result = largest_odd_num(str);
console.log(result);