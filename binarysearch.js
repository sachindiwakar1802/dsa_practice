function search(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      return middle;
    } 
    else if (target < array[middle]) {
      right = middle - 1;
    } 
    else {
      left = middle + 1;
    }
  }
  return -1;
}

let array = [1, 2, 3, 5, 6, 7, 89];
console.log(search(array, 6)); // ✅ Output: 4
