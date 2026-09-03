// 
const outerfunction=()=>{
    let outerVariable="I'm from outer";
    const innerFunction=()=>{
        console.log(outerVariable);
    }
    return innerFunction;
}
let closureFunction=outerfunction();
closureFunction();


// another example
function multiplier(factor){
    return function(number){
        console.log(number,factor);
        return number*factor;
    };
}

const double=multiplier(4);
console.log(double(3));
