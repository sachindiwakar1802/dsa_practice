// // approch 1 
// function length(str){
//   // trim  all teh alst and teh frist spaces from teh string
//   str = str.trim();
//   //now converting the string  into the arrays 
//   str = str.split(" ");
//   // now go to the last of the array and find the last word length 
// let lengtha =   str[str.length-1].length;
//   return lengtha
// }
// let str = "  hello world kese hon app sab log  ";
// console.log(length(str));

// approch 2 without the built in function 
function lastword(str){
  let count = 0;
  // loop started from the last 
  for(let i= str.length-1;i>=0;i--){
    if(str.charAt(i)!==" "){
      count++
    }
    else{
      if(count>0){
        return count;
      }
    }
  }
  return -1;
}
let str = "  abc  cds  ";
console.log(lastword(str))
