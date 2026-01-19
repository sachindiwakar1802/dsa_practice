function freq_vowels_consonents(str){
  // store all the values in the map
  let map = {};

  for(let i = 0; i < str.length; i++){
    if(map[str[i]] === undefined){
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }

  // vowels list
  let vowels = ['a','e','i','o','u'];
  let maxvowels = 0;
  let maxconsonents = 0;

  for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
      if(map[str[i]] > maxvowels){
        maxvowels = map[str[i]];
      }
    } 
    else {
      if(map[str[i]] > maxconsonents){
        maxconsonents = map[str[i]];
      }
    }
  }

  return maxvowels + maxconsonents;
}

let str = "abeifffod";
console.log(freq_vowels_consonents(str));
