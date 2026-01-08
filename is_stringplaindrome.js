function ispalindrome(str){
  let original = str;
  let newstr = "";
  for(let i = str.length - 1; i >= 0; i--){
    newstr += str[i];
  }
  return original === newstr;
}
let str = "121";
console.log(ispalindrome(str)); 
