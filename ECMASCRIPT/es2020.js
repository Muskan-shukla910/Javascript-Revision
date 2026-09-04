// BigInt
// Nullish Coalescing Operator ??
// Optional chaining ?.
// prpmise. allsetteled

// ======================= BigInt =================================================================
//* ===============================================================================================
// BigInt in a javascript is a data type used to represent and perform oparatoins on large integrers that exceed the limits of regular numbers

// creating BigInts
// Using the `n` suffix:

// .Using the BigInt() constructor:

// const anotherLargeNumber=BigInt("17389491649619649164961946196491649164914");
// console.log(anotherLargeNumber);

const maxNumber=BigInt(90071992547409910000000000000000000054654655765765765);
console.log(maxNumber);


// Nullish coalescing Operator ?? 
// the nullish coalescing operator is a logical operator that provides a concise way to handle nullish values. It returns its right-hand operand when its left-hand operand is null or undefined, otherwise, it returns the left-hand operand 
  

let favNum=null; // falsy
userFavNum=favNum ?? "Not found";
console.log(userFavNum);
// let favNum=null; // falsy
// userFavNum=favNum || 10;
// console.log(userFavNum);


// chaining operator (.?)
// It provides a concise way to access properties of an object without worrying about the existence of intermediate properties . It's particularly useful; when worjubg wuth nested objectes or accessing peoperties of objects that maybe null or undefined

// const person={
//     name:"Johan",
//     adress:{
//         city:0,
//         pincode:"221677"
//     },
//     contact:{
//         mobile:"12989379871",
//         enail:"user@123gmail.com"
//     }
// }

// console.log(person.adress.city);
// How optional chaining works
// const city=person.adress ? person.adress.city : "City is not defined";
// const city=person.adress ?.city ?? "City is not defined";
// console.log(city);

const person={
    name:"Johan",
    adress:{
        city:0,
        pincode:"221677",
        cordinates:{
            latitude:200.1,
            longitude:-76.992,
        },
    },
    contact:{
        mobile:"12989379871",
        enail:"user@123gmail.com"
    }
};

let latitude=person.adress?.cordinates ?.latitude ?? "This is not found";
console.log(latitude);


// promise allsetteled
// Promise.allSettled()
// we will cover it later in our promise section part of the video and you gonna love that part
