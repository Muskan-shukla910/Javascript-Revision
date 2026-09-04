// ES8
// list of new useful features add in ES8

// String padding
// Objects.values()
// Objects.keys()
// Objects.entries()
// Trailing commas in function paramter lists and calls 
// Ayncs functions

// String padding is a a way to add exrtra characters (like spaces) to a string to make it a specific length
// Use case make formatting text easier and more predictible , especially for tables alignments and ui elements

// using padStart() to pad from the beggning
// const cmpanyName="kodyfier";
// const paddeName=cmpanyName.padStart(10);
// console.log(paddeName.length);
// console.log(cmpanyName.length);

// using padEnd() to pad from the end 

// const cmpanyName="kodyfier";
// // const paddeName=cmpanyName.padEnd(10);
// const paddeName=cmpanyName.padEnd(15, "*");
// console.log(paddeName);
// console.log(cmpanyName.length);

// using both 


// trailing commaas 
// ? this feature allows to have trailing commas in function declartions, function calls,array litral & object litral.
function greet(name, age ,boolean){
    console.log(`Hello ${name} , you are ${age} years old`);
    
}
greet("Muskan",20,);

// Array litrals
let colors=["red","blue","pink",];
console.log(colors);

// Object.entries() and Object.values() I have already covered in previous lecture\
// 