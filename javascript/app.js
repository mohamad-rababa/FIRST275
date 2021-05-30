// comments one line 
/*first line 
second line 
*/  
// ctlr + / 

// DataTypes :
/* 
1- String => text => " " or ' ' ex: "Rababa" "5"
2- Number =>  5 1.3 -8  
3- Boolean => true / false
*/

//Variables : 
var userName = "Rababa";
// console for the develpoer 
// console.log(userName);

// for users :
// 1- alert() 
//  alert(userName);
// 2- document.write()
// document.write("<p>"+ userName +"</p>");


// operations (sympols that does action ) 
//  1- assignment operator = 
//  2- arithmatic operators :
//     + addition 1+1=>2
//     - subtraction 1-1 
//     * mul 
//     / division 
//     % module 
//     ++ increment  1++ =>2 5++ => 6
//     -- decrement  5-- => 4
//     ** power off  2**2 ("same as 2^2 in math") 2**3
//  3- comparsion 
//    ==    4==4 true / 4=="4" true ("compare only the value")
//    ===  4===4 true/  4==="4" false ("compares the datatype             and value") 
//    != ("compare only the value") 4!=5 true 4!="4" false
//    !== ("compares the datatype and value")  4!=="4" true
//    < 4<8 true
//    <= 
//    >=
//    > 

// console.log(4=="4");
// console.log(4==="4");
// console.log(4!="4");
// console.log(4!=="4");


// conditional statment 
/*
if(condition){
  if the condition is true run this code .....
}else {
  if the condition is false run this code ..
}


if(condition1){
  
}else if(condition2){
  
}else if(condition3){

}else{

}
*/



// if(userName=="Rababa"){
//   console.log("Hello Rababa")
// }else{
//   console.log("Hello "+userName)
// }

// var age=25

// if(age == 25 ){
//   console.log("what do you work ?");
// }else if(age<=10){
//   console.log("go back to school !!");
// }else{
//   console.log("Safety First");
// }
var mxm = "method X method";



var userName = prompt("Whats your name ?");
alert("welcome to our websit " + userName )


var observe = prompt("Do you observe safety rules?");
// console.log(userAge);

if(observe === mxm ){
  // console.log("what do you work ?");
  document.write("<p> Welcome to the club </p>")
}else if(observe === "cation"){
  document.write('<img src="https://pbs.twimg.com/profile_images/1324093768618909697/Ij-CAeyd_400x400.jpg" width="250px" alt="AOT"/>')
}else{
  alert('please next time follow safety rules ')
}
