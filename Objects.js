// InterView Quetions
// How can add dynmic key in an object ??
let idType="StudentId"
let student={
 // if you pass this type any values then add these square bractes
    [idType]:"A123456", // dynmic key
    sName:"Vinod",
    sAge:29,
    isStudent:"true",
    greet:function(){
        console.log(`Hey,my ${idType} is ${student[idType]} and my name is ${student.sName}`);
    }
}


student.greet();


// UseCase: when we want to get the user name and value in react

// ==============================================================
//                     Data Modeling 
// ==============================================================
//? Data modeling is the process of creating a visual representations of either a whole inforamtion system or parts of it to communicate connections between data points and structures .The goal is to illustrate the types of data used and stored whithin the system , the relationship among these data types , the ways the data can be gruped and oraganized and its format and attributes.

let car={
    brand:"Toyota",
    model:"Camry",
    year:2022,
    // this is a method
    start: function(){
        console.log("Engine Started");
    }
};
car.start();

// Interview Question
// explain the diffrence between paasing Objects by reference and by value in javascript. Provide an example to demonstrate each senerio.


// important concept in js
// let obj={id:3,name:"muskan"};

// let obj1=obj;
// obj1.name="Tanyaa";
// console.log(obj);

// Here this is an important catch

// console.log("Originoal"+ obj);  
// //output-Originoal[object Object]

// so if you want atual; data
// console.log("Origional data was",obj ,"after change it will be" ,obj1);


// Object.assignn() ye left to right copy krata hai 
// let obj1={name:"shukala", class:"12"};
// let obj3={name2:"shuhani", class1:"22"};
// let obj2={};
// let newObj=Object.assign(obj2,obj1,obj3);
// // newObj.name="Shobha";
// console.log(newObj);

// important concepts
// Two objects are equal only if they refer to the same object 
// Independent Objects(even if they look alike ) are not equal 

// let obj1={name:"shukala", class:"12"};
let obj3={name2:"shuhani", class1:"22"};

// console.log(obj1 === obj3);  // false beacuse both have diffrent refernces so it will be false;
let obj1={name:"shukala", class:"12"};
obj1=obj3;
console.log(obj1==obj3); // true beacause both are refering to same object 




// JSON(javascript Object Notation )
// Json is a data interchange format derived from Javascript Objects.Objects can be easily converted to JSON vice versa.
let student2={
    id:1,
    sName:"Saurabh",
    sAge:123,
    isStudent:false,
    greet:function(){
        console.log(`hey my name is ${student2.sName} and my idenetuty is ${student2.identity}`);
        
    },
};
let jsponData=JSON.stringify(student2);
console.log(jsponData);
