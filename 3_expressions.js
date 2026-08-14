// challengng time what will be the output
// this will be NaN (not a number);
var result="hello"/2;
console.log(result);


// Interview Quetions
var result1=0.1+0.2;
console.log(result1);
// 0.30000000000000004

// when working with floating point numbers in javascript , consider using methods like toFixed() when precise  deciaml representation is nessecary

// If I want to fixed it means I don.t want to much nunbers after that then I will use a method called toFixed
console.log(result1.toFixed(2));
// 0.30

// Strings Opartors
//  there are few ways to concetenate strings in javscript . the most common way is  to use the + oprator . For example, to concetan
// te the strings "hello" + "world" , you would use following code 

var str="hello"
var str1="World !"
console.log(str+str1);

// Interview Quetion 2
console.log(str+40);


// comparsion oprators
// comparison opartos used ti compare values in javascript and it returns true or false means a Boolean result
//   ? Equal(==) check if two values are equal, performing type corection is necessary.

console.log(5==5);

// Strcit equal(===)
// checks if two values are not equal , permorming type correction 
console.log(5==="5");

//? Not equal(=/  !=)  

// logical oprator
// Logical not (!)
// It returns true if the oprend is false, and false if the oparnd is true
// example
var isOpen=false;
console.log(!isOpen);

// Combinig logical oprators allow you to create a complex conditions

let drive=true;
let age=17;
let licences=true;
if(age>=18 || 18 && licences==true){
    console.log("you can drive");
}
else{
    console.log("you cannot drive");
    
}

// Important quetions
// console.log("5"-3);

// console.log(2<10<7);

// console.log("20"+10+10);



