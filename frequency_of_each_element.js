function frequency(str) {
  let length = str.length;
  for (let i = 0; i < length; i++) {
    let count = 0; // reset for each character
    for (let j = 0; j < length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
   console.log("the frequency of " + str[i] + " = " + count);
  }
}
let str = "aabbbnnn";
frequency(str);
