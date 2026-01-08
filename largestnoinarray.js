function smallest(array){
  let max = array[0]
  for(let i = 0;i<array.length;i++){
    if(array[i]>max){
      max = array[i];
    }
  }
  return max;
}

let array = [1,3,4,5,6,78,9];
console.log( smallest(array));
// largset no find in the array 