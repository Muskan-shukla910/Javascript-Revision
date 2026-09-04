// Rest and Spread oprator
// Es6 introduced the concept of rest element when the working with array distructuring 
// const numbres=[1,2,3,4,5,6,];
// [First,second,...others]=numbres;
// console.log(second);

// Es2018 introduces the same but for objects

const student={
    age:10,
    name:"vinod",
    isStudent:true,
};

const {age, ...others}=student;
console.log(others);

//? Object and Spread Operator
const obj1={a:10,b:20,c:50};
const obj2={c:30,d:20};

const newObj={...obj2,...obj1};
console.log(newObj);

// Promise.finally()
