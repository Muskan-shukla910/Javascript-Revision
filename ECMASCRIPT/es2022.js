// ECMASCRIPT 2022
// LIST OF NEW USEFUL FEATURES ADDED IN ES8  
//  .at()
// Object.hasOwn()

const person={
    age:32,
    name:"Muskan",
    adress:{
        village:"Munder",
        district:"Hardoi"
    },
};

let yes=person.hasOwnProperty("name");
let no=person.hasOwnProperty("class");
console.log(yes);
console.log(no);


// Using HasOwn()
console.log(Object.hasOwn(person,"name"));


// Problem with hasOwnProperty()
// Issue1-Doesn't work for objets created using Object.create(null)

const obj=Object.create(null);
obj.name="Muskan";
console.log(Object.hasOwn(obj,"name"));
