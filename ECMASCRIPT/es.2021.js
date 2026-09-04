// Ecmascript features (2021)/ES12
// String.prototye.replceAll()
// replceall in js is a function that replaceall occrences of a specified value with another value in a given string.
// replace all occrences of a word

// const originolString="Hello, world ! Hello again";
// const newString=originolString.replaceAll("Hello","Hi");
// console.log(newString);

// replcaing multiple spaces with single space  important

// const text="this has extra spaces";
// const normalizedtext=text.replaceAll(/\s+g," ");
// console.log(normalizedtext);


// Logical assignment Operator (||=, &&=, ??=)

// Left side ki value ko check karo, aur condition ke according right side ki value assign karo.
// Yaad rakho:
// ||= → Agar left falsy hai → right assign karo.
// 1. ||= — OR Assignment
// falsy values 
// false
// 0
// ""
// null
// undefined
// NaN

// falsy
// let name=null;
//  name ||="Tanya";
//  console.log(name);
 
//  truthy
// let name = "Shukla";

// name ||= "Muskan";

// console.log(name);

// 2. &&= — AND Assignment
// Syntax:
// a &&= b;

// let a=10;
// a &&=20;
// console.log(a);
// // output 20
// kyunki a truthy hai.

// let age = 0;
// age &&= 25;
// console.log(age);   

// Output:0
// Kyunki 0 falsy hai, so assignment nahi hua.
// Yaad rakho:
// &&= → Agar left truthy hai → right assign karo.

// ===========================================================================================
// 3. ??= — Nullish Assignment
// Ye thoda important hai 👀

// a ??= b;
// if (a === null || a === undefined) {
//     a = b;
// }
// // Yaani sirf null ya undefined hone par assignment hoga.

let name=undefined;

name ??="shukla";
console.log(name);


// Ek line mein yaad karo 🧠
// ||=  → FALSY ho toh assign(left side)
// &&=  → TRUTHY ho toh assign(left side)
// ??=  → NULL / UNDEFINED ho toh assign

// Numeric separators
// This features allows underscore(_) to be used as separators within numeric litrals to improve readability.
const bigNumber=1_000_000;
console.log(bigNumber);


// Promise.any()