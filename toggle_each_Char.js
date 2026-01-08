const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the string: ", function (s) {

  let toggle = "";

  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      toggle += String.fromCharCode(code + 32);
    }
    else if (code >= 97 && code <= 122) {
      toggle += String.fromCharCode(code - 32);
    }
    else {
      toggle += s[i];
    }
  }

  console.log("Toggled string:", toggle);
  rl.close();
});
