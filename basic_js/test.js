// FUNCTION
// this and arrow function
/*
const user ={
    username:"rajiv",
    price:987,
    orderSum: function(){
        console.log(`${this.username} nmaste welcome to our shop`);
        
    }
}
user.orderSum()
user.username="samay"
user.orderSum()
console.log(this);
*/

// function pankh (){
//     let username="disha"
//     console.log(this.username);
// }
// pankh()

// const pankh =function(){
//     let user="kon"
//     console.log(this.user);
    
// }

// const pankh=()=>{
//     let user="mannn"
//     console.log(this.user);
// }
// pankh()

// const addtwo =(num1,num2)=>{
//     return num1+num2
// }

// const addtwo=(num1,num2)=>(num1+num2)
// const addtwo=(num1,num2)=> 
// console.log(addtwo(2,8));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// immegiately invoked function expression(IIFE)
// (function chai(){
//     console.log("iilu matta");
// })();

// console.log(((num1, num2) => {
//     return num1 + num2;
// })(2, 7));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// IF ELSE
/*
const isuserLoggedIn=true
const temp=90
if (temp>100){
    console.log("order executed");
}
else{
    console.log("oredr will not executed");
    
}*/
// >,<,<=,=>,==,===,!=,!==
/*
const balance=200
if (balance>100) console.log("eligible for exam")

if (balance<100){
    console.log("less than 100");
}else if (balance<=200){
    console.log("balance less than equal 200");
    
}else{
    console.log("balance greater than 200");
    
}

isUserloggedin=true
debitCard=true
loggedFromGoogle=false
loggedFromGmail=true

if (isUserloggedin && debitCard){
    console.log("user eligible for Atm");
    
}else{
    console.log("not eligible");
    
}

if(loggedFromGmail || loggedFromGmail){
    console.log(`yes they logged`);
    
}*/
// switch case
/*
const month="feb"
switch (month) {
    case "jan":
        console.log("january hai bhai");
        
        break;
    case "feb":
        console.log("febuary hai bhai");
        
        break;
    case "march":
        console.log("march hai bhai");
        
        break;

    default:
        console.log("kuch nhi hai bhai");
        
        break;
}
*/

// +++++++++++++++++++++
/*
const useremail=''
if (useremail) {
    console.log("user enter");
    
}else{
    console.log("user not enter");
    
}*/
// +++++++++++++++++++++++++++++++++
// falsy value

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy value

// "0",'false'," ",[],{},function(){}
// ++++++++++++++++++++++++++++++++++++++++
/*
const useremail=[]
if (useremail.length===0) {
    console.log("Array is empty");
}
const empty={}
if (Object.keys(empty).length===0) {
    console.log("Object is empty");
    
}*/
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Nullish Colescing Operator (??) : null undefined

// let val ;
// val=34??65
// val=null??35
// val=undefined??45
// val=null??53??98

// console.log(val);
// +++++++++++++++++++++++++++++++++++++

// TERNIARY OPERATOR
// condition ? true:false

// const price=300
// price>=400? console.log("you can get icecream"):console.log("you can not get icecream");


