function findnegnum(num){
  for(let i=0;i<num.length;i++){
    if(arr[i]<0){
      console.log("the number is negative",arr[i])
    }
  }

}

let arr = [1,3,9,0];
findnegnum(arr);