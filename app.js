// var a= prompt();
// var b= parseInt(prompt());


// var firstName = prompt("enter first name");
// var firstName = prompt("enter first name");

//percentage


// var obt = +prompt("enter obtain marks");
// var tot = +prompt("enter total marks");
// var per;
// per = (obt / tot)*100;
// console.log("your percentage is  " + per);

// if (per >= 80 && per < 100) {
//     console.log("graded  A+");
// }
// else if (per >= 70 && per < 80) {
//     console.log("graded A");

// }
// else if (per >= 60 && per < 70) {
//     console.log("graded B");
// }
// else if (per >= 50 && per < 60) {
//     console.log("graded C");
// }
// else if (per >= 40 && per < 50) {
//     console.log("graded D");
// }
// else {
//     console.log("failed");
// }


// var age = +prompt("enter age");
// var weight = +prompt("enter weight");
// var gender = prompt("enter age");

// if (age >= 21 && weight == 86 && gender === "male") {
//     console.log("come to try out");

// }
// else {

//     console.log("invalid data");
// }

//____________________________________________________________________________________________________
//01


// var city = prompt("enter city name");

// if (city === "karachi") {
//     console.log("welcome to city of lights");
// }

//02

// var gender = prompt("enter gender");

// if (gender === "male") {
//     console.log("Good morning Sir");
// }
// if (gender === "female") {
//     console.log("Good morning Ma'am");

// }

//03

// var tl = prompt("enter light colour");

// if (tl === "green") {
//     console.log("move on");
// }
// else if (tl === "red") {
//     console.log("must stop");

// }
// else if (tl === "yellow") {
//     console.log("ready to move");

// }

//04

// var fuel = +prompt("enter fuel in litrs");
// if (fuel <= 0.25) {
//     console.log("please refill fuel");
// }

//05


// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


//06

// console.log("Marks sheet");
// var obt = +prompt("enter obtain marks");
// var tot = +prompt("enter total marks");
// console.log(" Total marks :" + tot);
// console.log("  Marks obtain :" + obt);
// var per;
// per = (obt / tot) * 100;
// console.log(" percentage :" + per);

// if (per >= 80 && per < 100) {
//     console.log("grade  A+");
//     console.log("\n Remarks :Excellent");
// }
// else if (per >= 70 && per < 80) {
//     console.log("grade A");
//     console.log("\n Remarks :Good");

// }
// else if (per >= 60 && per < 70) {
//     console.log("grade B");
//     console.log("\n Remarks :you need to improve");
// }
// else if (per >= 50 && per < 60) {
//     console.log("grade C");
//     console.log("\n Sorry");

// }
// else if (per >= 40 && per < 50) {
//     console.log("grade D");
// }
// else {
//     console.log("failed");
// }

// 07
// var num1 = 5;
// var num = +prompt("enter a num from 1 to 10");
// if (num == num1) {
//     console.log("correct answer");

// }

// if (num + 1 == num1) {
//     console.log("closer to correct one");
// }
// if (num - 1 == num1) {
//     console.log("closer to correct one");
// }

//08
// var a = +prompt("enter num");
// var b = 3;
// c = a % b;
// if (c == 0) {
//     console.log("num is divisible by 3");
// }


//09
// var nm1= +prompt("enter first number: ");
// var ans=nm1 % 2;
// if( ans ==0){ 
//     console.log("given num is even");
// }
// else{
//     console.log("given num is odd");
  
// }


//10

// var temp= +prompt("enter temperature in Celcious");
// if(temp>40){
//     confirm.console.log("it is too hot outside");
// }
// else if(temp>30){
//     confirm.log("the weather is normal");
// }
// else if(temp>20){
//     confirm.log("today's weather is cool");
// }else if(temp>10){
//     console.log(" OMG! today's weather is cool");
// }

//11

// var fnm=+prompt("entr first number");
// var snm=+prompt("entr second number");
// var opr = prompt("enter operator + , - , * , / , %");
// var ans;

// if(opr==="+"){
// ans=fnm + snm;
// console.log("sum:   "+ fnm +" + "+ snm +" = "+ ans);
// }
// else if(opr==="-"){
//     ans=fnm - snm;
//     console.log("Difference:   "+ fnm +" - "+ snm +" = "+ ans);
//     }
// else if(opr==="*"){
//  ans=fnm * snm;
//   console.log("Product:   "+ fnm +" * "+ snm +" = "+ ans);
//   }
// else if(opr==="/"){
//   ans=fnm / snm;
//  console.log("Division:   "+ fnm +" / "+ snm +" = "+ ans);
//   }    
//   else if(opr==="%"){
//     ans=fnm % snm;
//     console.log("modolus:   "+ fnm +" % "+ snm +" = "+ ans);
//     }
// else{
//     console.log("invalid operator");
// }


var eng, urdu, math,tot;
tot=100;
eng=+prompt("Enter marks of english");
urdu=+prompt("Enter marks of urdu");
math=+prompt("Enter marks of math");
var obt;

document.write(" <h4>subjests   &nbsp;&nbsp; obtain marks   &nbsp;&nbsp;  total marks     &nbsp;&nbsp;   percentage</h4>");
document.write(" English    &nbsp;&nbsp;&nbsp;       " + eng + "     &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;       "  +  tot +   "      &nbsp;&nbsp;&nbsp;          "  +   (eng/tot)*100+"% \n" );
document.write("<br>");
document.writeln(" \nUrdu             " + urdu + "           "  +  tot +   "               "  +     (urdu/tot)*100+"%\n" );
document.write("<br>");
document.writeln(" Math             " + math + "           "  +  tot +   "               "  +     (math/tot)*100+"%\n" );
document.write("<br>");
document.writeln("     Total             " +  (obt=eng+urdu+math) + "          "  +(tot*3)  +   "              "  +     (obt/300)*100+"%" );


// document.writeln(" welcome ");
// document.write("<br>");
// document.writeln("<h2> welcome</h2> "); 










