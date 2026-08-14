// filter methos
// find and findIndex

const products=[
    {name:"Laptop",price:200},
    {name:"Phone",price:3000},
    {name:"SmartWatch",price:300}
]
// filter producta with a price less than or equal to 500

const filterProducts=products.filter((currEle)=>{
    return currEle.price <= 500;
})


// console.log(filterProducts);

// find out unique values
const nunbers=[1,2,3,4,5,6,7,6,7,5,7,];

let rs=nunbers.filter((currVAl,idx,arr)=>{
    
    // console.log(currVAl != nunbers[idx+1]);
    
    
    
});
// console.log(rs);


// sort and compare (important to know it 

// the sorts method sorts the element of an array in place and returns the sorted array . By defalt , it sorts elements as strings 
const fruits=["Banana", "Apple","Orange","MAngo"];
fruits.sort();
// console.log(fruits);

// Campare method 

// const sortedNumbers=nunbers.sort((a,b)=>a-b);
// if(a>b) return 1 => switch the order
// if(a<b)  return -1 => keep the order.

const sortedNumbers=nunbers.sort((a,b)=>{
    if(a>b) return -1;
    if(a<b) return 1;
})
// console.log(nunbers);


// very important methods
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


// reduce method
let productts=[1,2,34,45,5,6];
let totalPrice=productts.reduce((accumalator,currVAl)=>{
    return accumalator+currVAl;
    
},0);
console.log(totalPrice);
