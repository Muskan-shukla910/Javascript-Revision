// this Object 
// Normal methos
// let obj={
//     name:"muskan",
//     age:22,
//     villege:"Munder",
//     greet:function(){
//         console.log(this);
//     }
// }
// obj.greet();
// let obj={
//     name:"muskan",
//     age:22,
//     villege:"Munder",
//     greet(){
//         console.log(this);
//     }
// }
// obj.greet();

// FAt Arrow function 
// const Obj={
//     name:"thapa Technical",
//     greet:()=>{
//         console.log(this);
//     },
// };
// Obj.greet();

// Object Usefull methods
// let student = {
//     id: 101,
//     name: "Muskan",
//     age: 22,
//     course: "BCA",

//     address: {
//         city: "Lucknow",
//         state: "Uttar Pradesh",
//         pincode: 226001
//     },

//     contact: {
//         email: "muskan@gmail.com",
//         phone: "9876543210"
//     },

//     skills: {
//         frontend: ["HTML", "CSS", "JavaScript", "React"],
//         backend: ["Node.js", "Express", "MongoDB"],
//         other: ["Git", "GitHub"]
//     },

//     education: {
//         college: "Lucknow University",
//         degree: "BCA",
//         year: 2026,
//         marks: 82
//     },

//     projects: [
//         {
//             name: "Hotel Booking System",
//             technology: "MERN",
//             status: "Completed"
//         },
//         {
//             name: "Career Compass",
//             technology: "MERN + Gemini API",
//             status: "In Progress"
//         }
//     ],

//     isAvailableForJob: true
// };


// console.log(student.keys());
// let keys=Object.keys(student);
// console.log(keys);


// Object.assign()
// const target={a:1,b:2};
// const source={c:3,d:4};
// const mergedObject=Object.assign({},target,source);
// console.log(mergedObject);

// Object.hasOwnProperty()
// console.log(student.hasOwnProperty("age"));


// Object.freeze

// Interview Quetiosn-Obejcts
const target={a:1,b:2};
const source={b:3,d:4};
const mergedObject=Object.assign({},target,source);
// console.log(mergedObject);

// { a: 1, b: 3, d: 4 }
// (why b:2 did not come beacause it overite the value and its start form left to right that's why . we have same key name.)


// Quetions no2
// problem Given an object representing a student, write a function to add a new object with its corresponding grade to the student's record . Also check if the grades property is present or not?

let student={
    name:"Bob",
    age:20,
    grades:{
        math:90,
        science:85,
        history:88,
    },
}
const addNewSubject=(student,subject,marks)=>{
    if(!student.grades){
        student.grades={};
    }
    return student.grades[subject]=marks
    // console.log();
}
 addNewSubject(student,"Computer",92);
 console.log(student);
 
//  Interview Quetions 3
// WAF that compare two objects to determine if they have the same properties and values.

// Example uses

let ObjA={name:"Alice",age:26, city:"Lucknow"};
let ObjB={name:"Alice",age:24, city:"Lucknow"};
let ObjC={name:"Bib",age:25, city:"San francisco"};

//              🤩😍😱😱
// sabse importnat thing is.Objects don't have length property ......................
const areObjectsEqual=(Obj1,Obj2)=>{
    // what if they have diffrent length so firstly check have they same length
    let o1=Object.keys(Obj1);
    let O2=Object.keys(Obj2);
    if(o1.length !=O2.length){
        console.log("hi");
        
        return false;
    }

    for(let key in Obj1){
        if(Obj1[key] != Obj2[key]){
        // console.log(Obj1[key]);
        return false;
        }
        else{
            return true
        };
        }
    }
    

console.log(areObjectsEqual(ObjA,ObjB)); // Shuold return true
console.log(areObjectsEqual(ObjA,ObjC)); // should return false

