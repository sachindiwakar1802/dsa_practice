// function wordContaining(str, x) {
//   let res = [];
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].includes(x)) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// let str = "abc cba dsa bhd";
// let x = "a";
// console.log(wordContaining(str, x));

// approch 2
function findwordindex(str){
         let res = [];
         for(let i=0;i<str.length;i++){
             for(j=0;j<str[i].length;j++){
              if(str[i][j]===x){
                res.push(i+1);
              }
             }
         }
         return res;
      }

      let str = "abm mnb javkbe jsadjs";
      let x = "a";

      console.log(findwordindex(str,x));