// IndexOf()
let txt1="muskan, Shukla";
// console.log(str.indexOf("Shukla"));

// lastIndexOf()
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString,position)

let strArr=Array.from(txt1);
console.log(strArr);

// let txt="Welcome javascript !, world best javascript course";
// console.log(txt.lastIndexOf("javascript"));
let strMap=strArr.map((currEle,index)=>
    `${currEle} - ${index}`
);
console.log(strMap);
