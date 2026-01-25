function linearSearch(array,target){
  for(let i=0;i<array.length;i++){
    if(array[i]===target){
      return i
    }
    }
    return " not found in the array"
}

let array = [1,3,4,56,9];
let target = 10;
console.log(linearSearch(array,target));
