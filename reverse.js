function reverse(str) {
  let arr = str.split("");   // convert string → array
  let n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }

  return arr.join(""); // array → string
}

let str = "abdc";
console.log(reverse(str)); // cdba
