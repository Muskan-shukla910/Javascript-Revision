// How to store in local storage
//  how to get and retrive from local storage
// the local storage allows you to save key/.value  pairs in the browser


// // how to add data from localstrorage
// localStorage.setItem("jsCourseTest","addingData");

// // How to get the data from localStorage
// localStorage.getItem("jsCourseTest");

// // How to remove the data from localStorage
// localStorage.removeItem("jsCourseTest");

// localstorage can store can only store strings , so when you want to store a complex data structure like an array or an object ,you need to convert it to a string using JSON.stringyfy

// JSON.stringfy() converts javascript object into a json string 
// useful when you want to to send data to a server or store it in antext file
// const data={name:"muskan",course:"bca"};

// const jsonString=JSON.stringify(data);
// console.log(jsonString);

// {"name":"muskan","course":"bca"}
// console.log(jsonString[0]);

// JSONparse-convert a json string into a javascript object 

// useful when you recieve JSON data from  a server or read it from a File,and you want to worjk with it as a javascript object

const jsonString2={"name":"muskan","course":"bca"};
const parseData=JSON.parse(jsonString2);
console.log(parseData);
