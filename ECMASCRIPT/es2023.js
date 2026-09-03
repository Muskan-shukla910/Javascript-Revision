// template litrals, let const, fat arrow functions I already covered
//! Part2 of Modern javascript


// Other Object property-Modern Javascript.
// let name="vinod", age=21;
// const person={name:name,age:age};
// We have a shorthand property if age and name is same we can write it like this

// const person={name,age};
// console.log(person);

// Destructuring-Modern js
// distructuring in javascript is a way to extract values from arrays or objects and assign them to variables in a concise and readable manner . 
// Use Case: Makes code cleaner and avoids repetitive copying of values

// Destructuring arrays
//  Destructuring is js expression that make possible to unpack values from array, or properties from objects , into distinct variables. that is , we can extract data from arrays and objects AND ASSIGN them to  variables
//? 1:Extracting specific elements
const numbers=[10,20,30];
// const first=numbers[0]  // traditional way
// const [first,second,third]=numbers;  //Modern way
// console.log(first);
// console.log(second);

//? 2 ignoring elements
// let [ , , third]=numbers;
// console.log(third);

// Interview Questions
// write a program swap two numbers without using third variable

let a=1;
let b=2;
 
// let third=a;
// a=b;
// b=third;
// console.log(a,b);

[a,b]=[b,a];
console.log(a,b);

// Destructuring Objects

const user={name:"Vinod",age:30};
// we will see the real life use case of it our main project main weather app
// wextracting properties
// const name=user.name; // traditional way
// it doesnot matter order
// const {name,age}=user; //Modern way
// console.log(name);

// Renaming properties
// user.name="Muskan";
// console.log(user);
const {name:fullName,age}=user;
console.log(fullName);

// Spread Oparator
// Javascript es6 introduced the spread oparator . The Syntax is there dots(...) followed by the array (or itrable)
 //? 1 copying an array
  let fruites=["mango","Orange","Banana","Grapes"];
  let copyfruites=[... fruites];
  console.log(copyfruites);
//? 2 concatinating arrays

const numbers1=[1,2,3];
const numbers2=[1,2,3];
let concat=[... numbers1 ,...numbers2];
console.log(concat);

//? 3  Adding to existing array
 let fruites1=["mango","Orange","Banana","Grapes"];
fruites1.push(...["Guava","papaya","PineApple"]);
console.log(fruites1);

// ! One more usecases
// In js when you spread a string using the spread syntax(...), it converts the string into the array of its individual  characters

let contry="INDIA";
// console.log(contry.split(""));
// Modern way of doint it using spread oprator
console.log([... contry]);

// Rest parameter
//  it allows a function to accepts an indefinite number of arguments as an array, providing a more flexible way to work with functions that can acept varying numbers of arguments

// Traditional way of doing it
// const sum=(a,b,c,d)=>{
//     return a +b+c+d;
// }
// with rest parameters
// const sum=(...numbers)=>{
//     // console.log(typeof(numbers));
//     // return a +b+c+d;
//    return numbers.reduce((acc,cuurVal)=>{
//        return acc=acc+cuurVal;
//     },0);
   
// }
// console.log(sum(1,2,3,4,1,2,3,4,4,5,6,77,));

// TODO note  a function definaion can only have one rest paramter, and the rest parameter must be the last paramater in the function defination.rest paramater bas tabhi hoga jab parenthesis ke andar ho
// function wrong1(... one,... two){};
// function write2(...wrong1,arguments1,arguments2 ){}




