// / very important methods
// map filter reduce
// wrtite a map method , write a function that takes an array of strings and returns a new array where each string is captilized

let strings=["muskan","kartik","akrash"];
let captilized=strings.map((currVAl,idx)=>{
    return currVAl.toUpperCase();
});
// console.log(captilized);


// USE MAP TO SQURE EACH NUMBER
let numbers1=[1,12,3,4,5,6];

let SQURE=numbers1.map((currVAl)=>{
    // return currVAl*currVAl;
});
// console.log(SQURE);.

// Using the map method , write a function that takes an array of numbers and returns arrray where each numbers is squared , but only it's an even number

let numbers=[1,12,3,4,5,6];
let Squre=numbers.map((currVAl)=>{
    if(currVAl%2==0){
        return currVAl*currVAl;
    }

    // here we are doing filtering beacuse my output coming like this and we won't want to print undefined
    // [ undefined, 144, undefined, 16, undefined, 36 ]
}).filter((currVAl)=>{
    currVAl != undefined;
    return currVAl;
});
console.log(Squre);


// write a functionn that takes and array of names and returns each name with prefixed with mr.

let names=["muskan","atul","saurabh","arpit","ayushi"];
let prefix="Mr"
let WithMr=names.map((currVAl)=>{
    console.log(currVAl);
    return prefix+" "+currVAl;
})
console.log(WithMr);