// Es10
// List of new useful features added in es8
// Array.prototype.{trimStart,trimEnd}
// Object.fromEntries
// catch

// flat() is a new array instance method that can create a one-dimensional array.(nested arrays into a single, flat array).
const nestedArray=[1,2,[3,4],2,4,5,6];
const nestedArray1=[1,[2,[3,4],10],5];
// const flattendArray=nestedArray1.flat(3);
const flattendArray=nestedArray.flat();
console.log(flattendArray);

// FlatMap() is a new Array instance method that combines flat() with map(). It's usefulwith calling a function that returns an array in the map() callback, but you want your resulted array to be flat

const arr=["My name","is Muskan","Shukla",];

const newArr=arr.flatMap((currval)=>currval.split(" "));
console.log(newArr);

// Object form entrires()- it returns an array containing all the object own properties, as an array of[key,values] pairs.

// introduce a new Object.fromEntries() method, which can create new object from such array of properties.

const person={name:"Muskan",age:21};
const entries=Object.entries(person);
console.log(entries);
// if we want preoues result then we use fromEntries
const newPerson=Object.fromEntries(entries);
console.log(newPerson);

// TrimEnd and Trimstart
// try-catch binding
// try {
    
// } catch (error) {
    
// }

// Opatinal try catch 
try {
    // const name="msuakn";
    // console.log("This is myname");
    
} catch  {
    console.log("This is an error");
    
}