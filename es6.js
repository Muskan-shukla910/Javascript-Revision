// FAT Functions(arrow functions)
const sum=function(a,b){
    let res=`The sum of ${a} and ${b} is ${a+b}`;
    console.log(res);
    
}
sum(3,4);

// same function convert in arrow functin

// const functionName=(par1,par2,.........)=>{
// return res;
// }

const sum1=(a,b)=>{
    return a+b;
}
console.log(sum1(3,2));


// Todo notes
// if the function body consits of a sigle expression , the brackets {} and the return keyword can be omitted
const sum=(a,b)=>`The sum of a and b is a+b`;
// if there is only one parameter, then parathensis() arounf the parameter lkist can be ommited

const squre= a => ` The square of ${a} is ${a*a}`;
console.log(squre(2));

// if there are no parametrs , use an empty  set of parenthsis()
const sub= ()=> `Ths sub is this`;
sub();


