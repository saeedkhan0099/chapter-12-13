//2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var first = prompt("Enter first integer :");
var second = prompt("Enter second integer :");
 if(isNaN(first) || isNaN(second)){
    console.log("invalid number enter");
 }else if(first>second){
    console.log("Largest among"+first+""+second+"is :"+first)
 }else{
    console.log("Largest among" + first + " "+ second +"is : "+ second)
 }


//3 Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var number = +prompt("Enter a number")
if(number <0){
   alert("This is a negative number")

}else if(number >0){
   alert("This is a position number ")
}else if (number ===0){
   alert("zero")
}else{
   alert("Not a number please enter a number")
}

/* 4 Write a program that takes a character (i.e. string of
   length 1) and returns true if it is a vowel, false otherwise*/

var inputData = prompt("please enter a single character")
var input =  inputData.toUpperCase()
if (input=="A" || input == "E"||input=="I"||input=="O"||input=="U"){
alert("true")
}
else{
alert("false")   
}


//5. Write a program that


var password = "pakistan"
var pasInput = prompt("enter your password")


if (pasInput==""){
    pasInput = prompt("please enter your password ")

}
else if(pasInput == password ){
   alert("Correct password")
}
else {
alert("Incorrect password")
}


//6. This if/else statement does not work. Try to fix it:

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
