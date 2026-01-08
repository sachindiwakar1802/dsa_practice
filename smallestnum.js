function smallest(array){
   smallestno = array[0];
   for(let i = 0;i<array.length;i++){
    if(array[i]<smallestno){
      smallestno = array[i]
    }
   }
   return smallestno
}

let array = [1,2,45,67,8];
console.log(smallest(array));