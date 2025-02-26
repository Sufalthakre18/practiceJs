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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FOR
/*
for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element==5) {
        console.log("5 is lucky number");
        
    }
    console.log(element);
    
}*/
/*
for (let i = 1; i <= 10; i++) {
    console.log(`outer loop of order ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop of order ${j} of outer loop ${i}`);
        console.log(i + '*' +j+" = "+i*j);
        
        
    }
}
*/

// ++++++++++++++++++++++++++++
// break and continue
// for (let i = 1; i <=20; i++) {
//     if (i==5) {
//         console.log("5 is detected");
//         break
        
//     }
//     console.log(`value of i is ${i}`);
    
// }
// for (let i = 1; i <=20; i++) {
//     if (i==5) {
//         console.log("5 is detected");
//         continue
        
//     }
//     console.log(`value of i is ${i}`);
    
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// do while

// index=1
// while (index<=10) {
//     console.log(`the value of index is ${index}`);
//     index=index+2
// }
// let i=11
// do {
//     console.log(`the value of i ${i}`);
//     i++
// } while (i<=10);
// +++++++++++++++++++++++++++++++++++++++++++
// HIGH ORDER ARRAY LOOP

// FOR OF
// ["","",""]
// [{},{},{}]

// const arr=[2,4,5,2,6]
// for (const i of arr) {
//     console.log(`the value of arr ${i}`);
    
// }
// MAPS
// const myMap=new Map()
// myMap.set("jatt",9)
// myMap.set("maratha",10)
// myMap.set("sikh",9)

// console.log(myMap);

// for (const i of myMap.keys()) {
//     console.log(`the keys of myMap ${i}`);
    
// }
// for (const i of myMap.values()) {
//     console.log(`the values of myMap ${i}`);
    
// }
// for (const [keys,values] of myMap) {
//     console.log(`the key-values pair of myMap :-${keys}:${values}`);
// }

// ++++++++++++++++++++++++++++++++++
// it will not iterable
// const myobj={
//     "singer":"sidhu",
//     "age":27
// }
// for (const [key,value] of myobj) {
//     console.log(`${key}->${value}`);
    
// }
// +++++++++++++++++++++++++++++++++++++++
// to solve this problem we use for in

// FOR IN
/*
const myObj={
    "js":"java Script",
    "py":"python",
    "c":"c language",
    "rb":"ruby"
}
for (const key in myObj) {
    console.log(`${key} is the shortcut of ${myObj[key]}`);
    
}*/
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const programming=["js","python","c","c++"]
// for (const key in programming) {
//     console.log(`${programming[key]}`);
    
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FOR EACH

const language=["js","python","c","c++"]
// language.forEach(function(item){
//     console.log(`${item} is the language`);
    
// })
// language.forEach((item)=>{
//     console.log(item);
    
// })
// function print(item){
//     console.log(item);
// }
// language.forEach(print)
// language.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })


// const programming=[
//     {
//         languageName:"java script",
//         languageFile:"js"
//     },
//     {
//         languageName:"ruby",
//         languageFile:"rb"
//     },
//     {
//         languageName:"python",
//         languageFile:"py"
//     }
// ]

// programming.forEach((item)=>{
//     console.log(item.languageName);
    
// })
// programming.forEach((item) => {
//     if (item.languageName === "java script") {
//         console.log(item.languageName);
//     }
// });

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FILTER

// const nums=[1,2,3,4,5,6,7]
// result=nums.filter((nums)=>nums>4)
// console.log(result);

// const nums=[1,2,3,4,5,6,7]
// result=nums.filter((nums)=>{
//     return nums>4})
// console.log(result);
// +++++++++++++++++++++++++++++++++++++++++++++++++++
// MAP
// const mynums=[1,2,3,4,5,6,7,8,9,10]
// const result=mynums.map((num)=>{return num+10 })
// const result=mynums
//             .map((num)=>num*10)
//             .map((num)=>num+1)
//             .filter((num1)=>num1>40)



// console.log(result);
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// REDUCE

// const mynums=[1,2,3]
// const result=mynums.reduce((acc,currval)=>{return acc+currval},0)
// const result=mynums.reduce(function(acc,currval){
//     console.log(`the acc ${acc} and current value ${currval}`);
//     return acc+currval
// },0)
// console.log(result);
// +++++++++++++++++++++++++++++++++++
const Shopping=[
    {
        book1:'data science',
        price:344
    },
    {
        book1:'science 10th',
        price:244
    },
    {
        book1:'learn py',
        price:394
    },
    {
        book1:'python easy',
        price:644
    },
]
const total_price=Shopping.reduce((acc,item)=>(acc+item.price),0)
console.log(total_price);

