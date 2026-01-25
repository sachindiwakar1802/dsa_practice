// // star pattern 1
// function star(n){

//   for(let i=0;i<n;i++){
//     let str =" "
//     for(let j=0;j<n;j++){
//      str = str +"*";
//     }
//    console.log(str)
//   }
//   console.log("\n");
// }
// let n =5;
// star(5);

// // star pattern 2
// function star2(n){
// for(let i=0;i<n;i++){
//   let str = " ";
//   for(let j=0;j<i;j++){
//     str = str + "*";
//   }
//   console.log(str);
// }
// console.log("\n");
// }
// let n=5;
// star2(5);

// // star pattern 3
// function star3(n){
//   for(let i = 0;i<n;i++){
//     str =" ";
//     for(let j =1;j<i;j++){
//             str = str + j;
//     }
//     console.log(str);
//     }
//     console.log("\n");
//   }

//   let n = 10;
//   star3(n);

// star pattern 4
function star4(n){
   for(let i = 0;i<n;i++){
     str =" ";
    for(let j = 1;j<n-i;j++){
             str = str + j
    }
     console.log(str);
     }
     console.log("\n");
   }
   let n = 10;
   star4(n);
