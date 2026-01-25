function remove_duplicate(arr){
  for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
        if(arr[i]!==arr[j]){
           arr.push[j]
        }
      }
  }
  return arr
}
let arr = [1,23,3,31,3,5,6];
console.log(remove_duplicate(arr))