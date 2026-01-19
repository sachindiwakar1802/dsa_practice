function ispalindrime(str){
  // here we converted the string into the lower case taki aasani se string word ko pehchan saken 
  str = str.toLowerCase();
  // so string os immutable so i have to taek a new string in the code 
  let filterStr = ""
  for(let i=0;i<str.length;i++){
    //here we are cheaking for the string eacgh word is in the sting not other word is presen in the srting 
    if(str[i].match(/[a-z0-9]/i)){
      //is not the put the words in the in teh  new string 
      filterStr  = filterStr +str[i];
    }
  }
  // here we are using the split to conver the string into the array then we convert it into the reverse way and then again we amke it teh string 
  let rev  = filterStr.split(" ").reverse().join("");
  // her we are comparing the string and the reverse strin g in the comaparing method 
  return filterStr ===rev; 
}
let str = "abdavsdyuf fvnkjaf ";
console.log(ispalindrime(str))