function isPalindrome(n) {
  let original = n.toString();
  let reversed = "";
  for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
  }
  if (reversed === original) {
    console.log(true);
  } else {
    console.log(false);
  }
}
let n = 121;
isPalindrome(n); // true
// method 2 
function isPalindrome(n) {
  let original = n;
  let reverse = 0;
  while (n > 0) {
    let digit = n % 10;              
    reverse = reverse * 10 + digit; 
    n = Math.floor(n / 10);
  }
  return original === reverse;
}
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
