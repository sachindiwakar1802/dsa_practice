function sec_largest_num(array){
  let max = array[0];
  let secmax  = [0];
  for(let i=0;i<array.length;i++){
    if(array[i]>max){
      max = array[i];
    }
    secmax = array[i]
  }
 return {max,secmax}
}
let array  = [1,23,4,5668,97];
console.log(sec_largest_num(array))
