function oddsum(arr, i = 0) {
  let n;

  if (i === arr.length) return 0;

  if (arr[i] % 2 !== 0) {
    n = arr[i] + oddsum(arr, i + 1);
  } else {
    n = oddsum(arr, i + 1); // handle even case
  }

  return n;
}

let arr = [1, 3, 4, 5];
console.log(oddsum(arr)); // 9
