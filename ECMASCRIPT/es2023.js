// ECMASCRIPT 2023

// Array.findLast() & Array.findLastIndex()

const array=[1,2,3,4,5,];
console.log(array.findLastIndex((ele)=>{
  return ele;
}));


// New Array.prototype functions

const numbers=["muskan","Shukla","Suhani","aman","OhH"];
// Array.prototype.toReversed();
const reversedNum=numbers.toReversed();
console.log(reversedNum);

// Array.protoType().toSorted(comapreFun)

const sortedArr=numbers.toSorted();
console.log("originol",sortedArr);
console.log("Sorted",sortedArr);


// Splice()
const splicedArr=numbers.toSpliced(1,1,"aman");
console.log(sortedArr);


// Array.prototypr.with(index,value)
const replaceWith=numbers.with(1,"TANya");
console.log("replaced",replaceWith);


