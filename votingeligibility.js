function voting(age){
 if(age<18){
  console.log("you are not eligible for the vote ");
 }
else if(age >=18){
  console.log("you are eligible for the voting ")
}
else{
  console.log("you are not in the list ")
}

}
let age  = 8;
voting(age);