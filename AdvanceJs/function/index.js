// First class function

function sayHello(name){
    return `Hello ${name} !`;
}

var greet=sayHello;
console.log(greet("Muskan Shukla"));

// Higher Oreder functions

// a higher order function that takes one or more functions as argumnets or returns  a function as a result.


// Callback function : a callback function is a function passed as an argument to another function and is executed after a completuons a task.
// Here is an example


function proceessUserInput(name,greetuser){
    console.log(`Recived input ${name}`);
    greetuser(name);
}
function greetuser(name){
    console.log(`Hello ${name}`);
}

proceessUserInput("Vinod",greetuser);


// proceessUserInput is  an Higher Order functions beacaus it takes a function(function) as a argument 
// greetUser is a callback function beacuse it is passed as an argument proceessUserInput and gets executed after the completion of a main task. 

// Interview Quetion 1

function mathoparations(x,y, operation){
    // console.log(x,y);
    
    console.log(`sum of two numers is this`);
    return operation(x,y);
}

function add(x,y){
     let add=x+y;
     return add;
}
function sub(x,y){
     let sub=x-y;
     return sub;
}

console.log(mathoparations(4,6,add));
console.log(mathoparations(4,6,sub));