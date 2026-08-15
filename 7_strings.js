// // // // // // // IndexOf()
// // // // // // let txt1="muskan, Shukla";
// // // // // // // console.log(str.indexOf("Shukla"));

// // // // // // // lastIndexOf()
// // // // // // // syntax
// // // // // // // lastIndexOf(searchString)
// // // // // // // lastIndexOf(searchString,position)

// // // // // // let strArr=Array.from(txt1);
// // // // // // // console.log(strArr);

// // // // // // // let txt="Welcome javascript !, world best javascript course";
// // // // // // // console.log(txt.lastIndexOf("javascript"));
// // // // // // let strMap=strArr.map((currEle,index)=>
// // // // // //     `${currEle} - ${index}`
// // // // // // );
// // // // // // // console.log(strMap);


// // // // // // // searching
// // // // // // // includes()- return true if 
// // // // // // // match(): returns an array of the matched values or null if no match is found
// // // // // // // let txt="Welcome javaScript !, world best javaScript course";
// // // // // // // // let res=txt.match("javaScript")
// // // // // // // let res=txt.match(/javaScript/g)
// // // // // // // console.log(res);
// // // // // // // todo here the js converts the normal text into regualr expression text.match(/javascript/) wothout the g flag

// // // // // // // matchall()-

// // // // // // let txt="Welcome javaScript !, world best javaScript course";
// // // // // // let matchRes=txt.matchAll("javaScript")
// // // // // // // let res=txt.match(/javaScript/g)
// // // // // // console.log(matchRes);
// // // // // // // here the js converts the normal text into regular expression text.match(/Javascript/g); also adds the g flag at the end
// // // // // // for(let item of matchRes){
// // // // // //     console.log(item[0]);
    
// // // // // // }
// // // // // // // includes()-returns true if the string conatins the satifiead value, and false otherwise


// // // // // // let txt="Welcome javaScript !, world best javaScript course";
// // // // // // let includeResult=txt.includes("javaScript");
// // // // // // console.log(includeResult);

// // // // // // Note-includes is case sensitive .includes() is an es6 feature

// // // // // // startWith():
// // // // // let txt="Welcome javaScript !, world best javaScript course";

// // // // // let startWithResult=txt.startsWith("Welcome");
// // // // // console.log(startWithResult);
// // // // // // let endsWithResult=txt.endsWith("muskan");
// // // // // // console.log(endsWithResult);

// // // // // let endsWithResult=txt.endsWith("course");
// // // // // console.log(endsWithResult);


// // // // let txt="Welcome javaScript !, world best javaScript course";
// // // // let slicee=txt.slice(0,10);
// // // // console.log(slicee);


// // // let txt="Hello JavaScript , Welcome javaScript !, world best javaScript course";
// // // // let substringResult=txt.substring(1);
// // // // let substringResult=txt.slice(1);
// // // // let substringResult=txt.replace("JavaScript","Muskan");
// // // let substringResult=txt.replaceAll("JavaScript","Muskan");
// // // console.log(substringResult);


// // // Extracting string characters
// // let name="muskan";
// // // let charAtResult=name.charAt(2);
// // // let charAtResult=name.CharAtCOde(2);
// // // console.log(charAtResult);

// // // at()
// // let atRes=name.at(-2);
// // console.log(atRes);

// // let str="orange,mango,papaya,pineapple";
// // let strArr=str.split(",").reverse();
// // let strArr=str.split(",").reverse().join();
// // console.log(strArr);


// // Interview Quetions
// function printA_To_Z(){
//     for(let char=97;char<=122;char++){
//         // let ch=charAt(i);
//         console.log(String.fromCharCode(char));
//         }
// }

// printA_To_Z();


// // count the number of vowels

// let MyStr="muskan shukla";
// let count=0;

// for (const vowel of MyStr) {
//     if(vowel=='a' || vowel=='i' || vowel=='e' || vowel=='o' || vowel=='u'){
//         count++;
//     }
// }
// console.log(count);

// // write a function to check if all the vowel presents in a string or not ?
// let str="Shukla"
// function checkVowel(){
//     for (const ele of str) {
//         if(ele=='a' ||ele=='e' ||ele=='i' ||ele=='e' ||ele=='u'){
//         console.log("yes vowels are presnt in this string");
//         break;
//     }
//     // else{
//         // console.log("Vowels are not presnet");   }
        
//     }
    
// }
// checkVowel();


// // another method
// const checkAllVowelPresentOrNOt=((str)=>{
//     const vowels="aeiou";
//     for(let char of vowels){
//         // let yes=str.includes(char);
//         // console.log(yes);
//         if(!str.includes(char)){
//             return false;
//         }
//         return true;
        
//     }

// });
// console.log(checkAllVowelPresentOrNOt("Muskan shukla , is here"));




// panagram 


const panagramChecker=(str)=>{
    let inputArr=str.toLowerCase().split("");
    // console.log(inputArr);
    console.log("z".charCodeAt());
    const values=inputArr.filter(
        (currEle)=>
        currEle.charCodeAt() >= "a".charCodeAt() &&
        currEle.charCodeAt()<= "z".charCodeAt()

    );
    // console.log(values);
    // spread oparator
    return [...new Set(values)].length===26;
    
    // if(){
    //     console.log("yes .... this is a panagram");
        
    // }
}

console.log(panagramChecker("The quick brown fox jumps over the lazy dog."));

