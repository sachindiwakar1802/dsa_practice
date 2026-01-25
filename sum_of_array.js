function arraysum(arr, i = 0) {
  if (i === arr.length) return 0;
  return arr[i] + arraysum(arr, i + 1);
}
console.log(arraysum([1, 2, 45]));
